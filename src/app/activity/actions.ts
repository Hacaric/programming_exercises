"use server";
import type { Activity } from "generated/prisma";
import { prisma } from "lib/prisma";
import { parseTagFilters } from "./utils";
import type { ActivityWithTags } from "~/lib/types";
import { getActivitiesWithTags } from "~/lib/activity";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import type { ActivitiesWithStarData } from "./activitylist";
import { authClient } from "~/server/better-auth/client";
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
function scoreQueryMatches(activity: Activity, query: string | null): number {
    const NAME_MATCH_WEIGHT = 15;
    const DESCRIPTION_MATCH_WEIGHT = 1;

    if (!query || query.trim() == "") {
        return 1;
    }
    console.debug(
        `Scoring query '${query}' against acitvity name '${activity.name}'...`,
    );
    const query_words = query
        .toLowerCase()
        .split(" ")
        .filter((word) => word.trim() != "");
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
            // console.debug(`Found required query word: ${query_word}`);
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
            // console.debug(`Failed to find required query word: ${query_word}`);
            failed_to_find_required_word = true;
            return;
        }
        score += NAME_MATCH_WEIGHT * occurences_name;
        score += DESCRIPTION_MATCH_WEIGHT * occurences_desc;
    });
    if (failed_to_find_required_word) {
        console.debug(`Match score: 0 (failed to find required queryword)`);
        return 0;
    }
    console.debug(`Match score: ${score}.`);
    return score;
}

/**
 *
 * @param query String query
 * @param accepted_activity_ids List of activityProperites ids
 * @returns
 */
export async function GetActivitiesFiltered(
    query: string | null,
    accepted_activites?: ActivityWithTags[],
): Promise<(ActivityWithTags & {isStarred: boolean})[]> {
    console.debug(`Filtering activities...`);

    let all_activities: ActivityWithTags[];
    if (!accepted_activites) all_activities = await getActivitiesWithTags();
    else all_activities = accepted_activites;

    let activities = all_activities
        .map((activity) => {
            return { activity, score: scoreQueryMatches(activity, query) };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ activity }) => activity);

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId: string | null = session?.user.id ?? null;
    let activitiesWithStarData: (ActivityWithTags & {isStarred: boolean})[];
    if (userId) {
        const starredAcitivities = new Set(
            (await prisma.userActivityStart.findMany({
                where: {
                    userID: userId
                }
            })).map(data => data.activityID) // We already know that these stars belong to current user, drop them to facilitate hashset lookup
        )
        activitiesWithStarData = activities.map((activity: ActivityWithTags) => {
            const isStarred = starredAcitivities.has(activity.id); // THE ANSWER IS HASHMAP :fire: :fire: :fire:  ... again
            return {...activity, isStarred: isStarred} // Add isStarred to the mess!
        })
    } else {
        activitiesWithStarData = activities.map((activity: ActivityWithTags) => {
            return {...activity, isStarred: false}
        })
    }
    
    console.debug(`[SERVER] GetActivitiesFiltered() returning ${JSON.stringify(activities.map(a=>a.name))}`)
    return activitiesWithStarData;
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

    const sets = arraysSorted
        .splice(1, arraysSorted.length - 1)
        .map((arr) => new Set(arr));

    return (
        controlArray?.filter((item) =>
            sets.every((set_) => {
                return set_.has(item);
            }),
        ) ?? []
    );
}

export async function getActivitiesFromRawFilters(
    query: string | null,
    tag_filters_raw: string | string[] | null,
): Promise<(ActivityWithTags & {isStarred: boolean})[]> {
    console.debug(`[SERVER] Called getActivitiesFromRawFilters() with params: query=${query}, tag_filters_raw=${tag_filters_raw}`)
    let tag_filters_parsed: string[] | null = parseTagFilters(tag_filters_raw);
    if (!tag_filters_parsed || tag_filters_parsed.length == 0) {
        return await GetActivitiesFiltered(query);
    }
    console.debug(`[SERVER] getActivityFromRawFilters(): Parsed filters: ${JSON.stringify(tag_filters_parsed)}`)

    const activities = await prisma.activity.findMany({
        where: {
            AND: tag_filters_parsed.map((tagName) => ({
                tags: {
                    some: {
                        name: tagName,
                    },
                },
            })),
        },
        include: {
            tags: true,
        },
    });

    console.debug(`[SERVER] getActivityFromRawFilters(): Got filtered activites: ${JSON.stringify(activities.map(a=>a.name))}`)

    return await GetActivitiesFiltered(query, activities);
}

export async function server_setIsStarred(activityID: number, state: boolean): Promise<boolean | null> {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return null;
    }
    if (state === true) {
        await prisma.userActivityStart.upsert({
            where: {userID_activityID: {
                userID: session.user.id,
                activityID: activityID,
                }
            },
            update: {
                userID: session.user.id,
                activityID: activityID,
            },
            create: {
                userID: session.user.id,
                activityID: activityID,
            },
        })
    } else {
        // Try-catch... prisma.*.delete will always throw, so to keep this a single query, I'm using try-catch
        // Source: https://github.com/prisma/orm/discussions/8382#discussioncomment-1035833
        try {
            await prisma.userActivityStart.delete({
                where: {
                    userID_activityID: {
                        userID: session.user.id,
                        activityID: activityID,
                    }
                }
            })
        } catch { /* do nothing */ }
    }

    return state;
}

