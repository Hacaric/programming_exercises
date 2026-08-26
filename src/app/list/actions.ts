'use server';
import { ActivityElement, getActivityTagsJSX } from "./activity";
import type { Activity, ActivityTags } from "generated/prisma";
import { prisma } from "lib/prisma";
import type { JSX } from "react";

export async function GetActivity(id: number): Promise<Activity&{tags: ActivityTags|null} | null> {
    const activity = await prisma.activity.findUnique({
        where: {id: id},
        include: {tags: true}
    })
    if (!activity) {
        console.warn(`Warning: Activity not found (id: ${id})`)
        return null;
    }
    if (!activity.tags) {
        console.error(`Error: Activity (id: ${id}) defiend incorrecty, cannot be used: Missing ActivityTags.`)
        return null;
    }
    return activity;
}

export async function GetActivityTags(id: number) {
    const activity = await GetActivity(id);
    if (!activity || !activity.tags ||!activity.tags?.id) {
        return null;
    }
    const activityTags = await prisma.activityTags.findUnique({
        where: {id: activity.tags.id},
        include: {activityType: true, ageGroups: true, enviroments: true, preparation: true}
    })
    if (!activityTags) {return null;}
    return activityTags;
}

function countSubstrngOccurences(main: string, searchString: string) {
    const count = (main.match(new RegExp(searchString, "g")) || []).length;
    return count;
}

function scoreQueryMatches(activity: Activity, query: string|undefined) {
    const NAME_MATCH_WEIGHT = 5;
    const DESCRIPTION_MATCH_WEIGHT = 1;


    if (!query || query == '') {return {activity, match_score: 1};}
    console.log(`Scoring query '${query}' against acitvity name '${activity.name}'...`)
    const keywords = query.toLowerCase().split(' ');
    var score = 0;
    keywords.forEach((keyword) => {
        score += NAME_MATCH_WEIGHT * countSubstrngOccurences(activity.name.toLowerCase(), keyword)
    })
    keywords.forEach((keyword) => {
        score += DESCRIPTION_MATCH_WEIGHT * countSubstrngOccurences(activity.description.toLowerCase(), keyword)
    })
    console.log(`Found ${score} matches.`);
    return {activity, match_score: score}
}

export async function GetActivities(query?: string): Promise<JSX.Element[]> {
    // 
    //   !!! WATCH OUT !!! BAD CODE AHEAD, pls rewrite
    //

    // TODO: not pull every activity, only a fixed amount
    const activities = await Promise.all((await prisma.activity.findMany())
        .map(
            (activity) => scoreQueryMatches(activity, query)
        )
        .filter(
            ({activity, match_score}) => match_score > 0
        )
        .sort(
            ({activity, match_score}) => match_score
        )
        .map(
        async ({activity, match_score}) => {
            const tags = await getActivityTagsJSX(activity);
            return await ActivityElement(activity.id, activity.name, activity.description, tags);
        }
    ))
    return activities;
} 


