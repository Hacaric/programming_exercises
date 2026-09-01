"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { getActivitiesFromRawFilters } from "./actions";
import { ActivityCard } from "~/components/activitycard";
import type { ActivityWithTags } from "~/lib/types";

export function ActivityList(props: { initialData: ActivityWithTags[] }) {
    const { initialData } = props;
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const tag_filters_raw = searchParams.get("tag_filters") || "";

    const [activities, setActivities] =
        useState<ActivityWithTags[]>(initialData);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            setActivities(
                await getActivitiesFromRawFilters(query, tag_filters_raw),
            );
        });
    }, [query, tag_filters_raw]);
    return (
        <div className="flex flex-wrap gap-2">
            {isPending && <p>Loading...</p>}
            {!isPending &&
                activities.map((activity) => (
                    <ActivityCard activity={activity} key={activity.id} />
                ))}
            {!isPending && activities.length == 0 && <p>No activity found.</p>}
        </div>
    );
}
