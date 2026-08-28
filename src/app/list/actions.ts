"use server";
import { ActivityElement, getActivityTagsJSX } from "./activity";
import type { Activity } from "generated/prisma";
import { prisma } from "lib/prisma";
import type { JSX } from "react";

export async function GetActivity(id: number): Promise<Activity | null> {
    const activity = await prisma.activity.findUnique({
        where: { id },
    });
    if (!activity) {
        console.warn(`Warning: Activity not found (id: ${id})`);
        return null;
    }
    return activity;
}

export async function GetActivityTags(id: number) {
    const activityTags = await prisma.activityTags.findUnique({
        where: { activityId: id },
        include: {
            activityType: true,
            ageGroups: true,
            enviroments: true,
            preparation: true,
        },
    });
    if (!activityTags) {
        return null;
    }
    return activityTags;
}

function countSubstrngOccurences(main: string, searchString: string) {
    const count = (main.match(new RegExp(searchString, "g")) || []).length;
    return count;
}

function scoreQueryMatches(activity: Activity, query: string | undefined) {
    const NAME_MATCH_WEIGHT = 15;
    const DESCRIPTION_MATCH_WEIGHT = 1;

    if (!query || query == "") {
        return { activity, match_score: 1 };
    }
    console.log(
        `Scoring query '${query}' against acitvity name '${activity.name}'...`,
    );
    const keywords = query.toLowerCase().split(" ");
    var score = 0;
    var failed_required = false;
    keywords.forEach((keyword) => {
        if (failed_required) {
            return;
        }
        let required = keyword[0] == '"' && keyword[keyword.length - 1] == '"';
        if (required) {
            keyword = keyword.substring(1, keyword.length - 1);
            console.debug(`Found required keyword: ${keyword}`);
        }
        const occurences_name = countSubstrngOccurences(
            activity.name.toLowerCase(),
            keyword,
        );
        const occurences_desc = countSubstrngOccurences(
            activity.description.toLowerCase(),
            keyword,
        );
        if (required && occurences_name == 0 && occurences_desc == 0) {
            console.debug(`Failed to find required keyword: ${keyword}`);
            failed_required = true;
            return;
        }
        score += NAME_MATCH_WEIGHT * occurences_name;
        score += DESCRIPTION_MATCH_WEIGHT * occurences_desc;
    });
    if (failed_required) {
        console.debug(`Match score: 0 (failed to find required keyword)`);
        return { activity, match_score: 0 };
    }
    console.debug(`Match score: ${score}.`);
    return { activity, match_score: score };
}

export async function GetActivities(query?: string): Promise<JSX.Element[]> {
    //
    //   !!! WATCH OUT !!! BAD CODE AHEAD, pls rewrite
    //

    // TODO: not pull every activity, only a fixed amount
    const activities = await Promise.all(
        (await prisma.activity.findMany())
            .map((activity) => scoreQueryMatches(activity, query))
            .filter(({ activity, match_score }) => match_score > 0)
            .sort((a, b) => b.match_score - a.match_score)
            .map(async ({ activity, match_score }) => {
                const tags = await getActivityTagsJSX(activity);
                return await ActivityElement(
                    activity.id,
                    activity.name,
                    activity.description,
                    activity.durationMinutes,
                    tags,
                );
            }),
    );
    return activities;
}
