"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { getActivitiesFromRawFilters } from "./actions";
import { ActivityCard } from "~/components/activitycard";
import type { ActivityWithTags } from "~/lib/types";

export type ActivitiesWithStarData = ActivityWithTags & { isStarred: boolean };

export function ActivityList(props: {
    initialData: (ActivityWithTags & { isStarred: boolean })[];
    loggedIn: boolean;
}) {
    const { initialData, loggedIn } = props;
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const tag_filters_raw = searchParams.getAll("tag_filters") || "";

    // This is because tag_filter_raw will get new array every call, which will trigger infinite loop of useEffect, because the dependency is always changing
    // Thank god for AI (I don't like using it but it was really helpful in this case), it would be hell to debug if I couln't use it. Chat: https://share.gemini.google/LHohmUC3x29m
    const tag_filters_key = JSON.stringify(tag_filters_raw);
    console.log(`tag_filters_raw: ${tag_filters_raw}`);

    const [activities, setActivities] =
        useState<ActivitiesWithStarData[]>(initialData);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const activities_: (ActivityWithTags & { isStarred: boolean })[] =
                await getActivitiesFromRawFilters(query, tag_filters_raw);

            setActivities(activities_);
        });
    }, [query, tag_filters_key]);
    return (
        <div className="flex flex-wrap gap-2">
            {isPending && <p>Loading...</p>}
            {!isPending &&
                activities.map((activity) => {
                    return (
                        <ActivityCard
                            activity={activity}
                            key={activity.id}
                            loggedIn={loggedIn}
                        />
                    );
                })}
            {!isPending && activities.length == 0 && <p>No activity found.</p>}
        </div>
    );
}
