"use server";
import {
    ActivityElement,
    ActivityTag,
    getActivityTagsJSX,
} from "../../utils/activity";
import type { Activity, ActivityProperties } from "generated/prisma";
import { prisma } from "lib/prisma";
import type { JSX } from "react";
import { parseTagFilters } from "./utils";
// import { ActivityTagFilter, handleTagClick } from "./tagFilterClick";


/**
 * Count occurences of substring in string (who would have guessed)
 * - Maybe not the most optimal way to do this, idk
 * - Source: https://www.geeksforgeeks.org/javascript/how-to-count-string-occurrence-in-string-using-javascript/
 */
function countSubstringOccurences(main: string, searchString: string) {
    const count = (main.match(new RegExp(searchString, "g")) || []).length;
    return count;
}

/**
 * Score activity based on number of matches with query
 * @param activity
 * @param query
 * @returns {activity: Activity, match_score: number}
 */
function scoreQueryMatches(
    activity: Activity,
    query: string | null,
): { activity: Activity; match_score: number } {
    const NAME_MATCH_WEIGHT = 15;
    const DESCRIPTION_MATCH_WEIGHT = 1;

    if (!query || query == "") {
        return { activity, match_score: 1 };
    }
    console.debug(
        `Scoring query '${query}' against acitvity name '${activity.name}'...`,
    );
    const query_words = query.toLowerCase().split(" ");
    var score = 0;
    var failed_to_find_required_word = false;
    query_words.forEach((query_word) => {
        if (failed_to_find_required_word) {
            // If we fail to find required query word (wrapped in quotes - ""), we will not show the activity no matter how many matches it gets. So we return and save compute power
            return;
        }
        let is_required: boolean =
            query_word[0] == '"' && query_word[query_word.length - 1] == '"';
        if (is_required) {
            query_word = query_word.substring(1, query_word.length - 1);
            console.debug(`Found required query word: ${query_word}`);
        }
        const occurences_name = countSubstringOccurences(
            activity.name.toLowerCase(),
            query_word,
        );
        const occurences_desc = countSubstringOccurences(
            activity.description.toLowerCase(),
            query_word,
        );
        if (is_required && occurences_name == 0 && occurences_desc == 0) {
            console.debug(`Failed to find required query word: ${query_word}`);
            failed_to_find_required_word = true;
            return;
        }
        score += NAME_MATCH_WEIGHT * occurences_name;
        score += DESCRIPTION_MATCH_WEIGHT * occurences_desc;
    });
    if (failed_to_find_required_word) {
        console.debug(`Match score: 0 (failed to find required queryword)`);
        return { activity, match_score: 0 };
    }
    console.debug(`Match score: ${score}.`);
    return { activity, match_score: score };
}

function removeDuplicates<T>(arr: Array<T>): Array<T> {
    return [...new Set(arr)];
}

/**
 *
 * @param query String query
 * @param accepted_activity_ids List of activityProperites ids
 * @returns
 */
export async function GetActivitiesFiltered(
    query: string | null,
    accepted_activity_ids_set?: Set<number>,
): Promise<JSX.Element[]> {
    //
    //   !!! WATCH OUT !!! BAD CODE AHEAD, pls rewrite
    //
    console.debug(`Getting activities...`);
    let all_activities;
    if (accepted_activity_ids_set) {
        const accepted_activity_ids = Array.from(accepted_activity_ids_set);
        console.debug(
            `Found filters: ${JSON.stringify(accepted_activity_ids)}`,
        );
        all_activities = await prisma.activity.findMany({
            where: {
                id: {
                    in: accepted_activity_ids,
                },
            },
        });
    } else {
        console.debug(`No filters found, returning all activities.`);
        all_activities = await prisma.activity.findMany();
    }

    // TODO: not pull every activity, only a fixed amount, probably pull from the db until enogh activities found; for now it'll (maybe) be faster to pull everything at once
    const activities = await Promise.all(
        all_activities
            // Assign every element its score, match in name gives more than match in description
            // No match will result in score=0
            .map((activity) => scoreQueryMatches(activity, query))

            // Exclude activities with no matches
            .filter(({ activity, match_score }) => match_score > 0)

            // Sort activities based on how many matches were found
            .sort((a, b) => b.match_score - a.match_score)

            // Make raw Activity data into JSX element with proper tags
            .map(async ({ activity, match_score }) => {
                const tags = await getActivityTagsJSX(activity);
                return await ActivityElement(
                    activity.id,
                    activity.name,
                    activity.description,
                    tags,
                );
            }),
    );
    return activities;
}

export async function GetAllActivities() {
    return await GetActivitiesFiltered(null);
}

function findElementsContainedInEveryArray<T>(...arrays: T[][]): T[] {
    if (arrays.length == 0) {
        return [];
    }
    if (arrays.length == 1) {
        return arrays[0] ?? [];
    }
    const arraysSorted: T[][] = arrays.sort((a, b) => a.length - b.length);
    const controlArray = arraysSorted[0];
    console.log(`The shortest array is long ${controlArray?.length}`);
    const sets = arraysSorted
        .splice(1, arraysSorted.length - 1)
        .map((arr) => new Set(arr));
    console.log(`Sets: ${JSON.stringify(sets.map((s) => Array.from(s)))}`);
    return (
        controlArray?.filter((item) =>
            sets.every((set_) => {
                console.log(`${set_} has ${item}? ${set_.has(item)}`);
                return set_.has(item);
            }),
        ) ?? []
    );
}

export async function getActivitiesFromRawFilters(
    query: string | null,
    tag_filters_raw: string | null,
): Promise<JSX.Element[]> {
    console.log(
        `Calling getAccepted_ActivityProperty_ids('${tag_filters_raw})`,
    );
    let tag_filters_parsed = parseTagFilters(tag_filters_raw);
    if (!tag_filters_parsed || tag_filters_parsed.length == 0) {
        return await GetActivitiesFiltered(query);
    }
    let tagActivityIDs: number[][] = [];
    const tags = await prisma.activityTag.findMany({
        where: {
            name: { in: tag_filters_parsed },
        },
        include: {
            belongsToActivityProperties: true,
        },
    });
    console.debug(
        `[DEBUG] getActivitiesFromRawFilters: tags: ${JSON.stringify(tags)}`,
    );
    tags.forEach((tag) => {
        tagActivityIDs.push(
            tag.belongsToActivityProperties.map(
                (activityProperties) => activityProperties.activityID,
            ),
        );
    });

    const acceptedActivities = new Set(
        findElementsContainedInEveryArray(...tagActivityIDs),
    );

    return await GetActivitiesFiltered(query, acceptedActivities);
}
