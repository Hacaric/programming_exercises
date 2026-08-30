"use client";

import { useSearchParams } from "next/navigation";
import {
    useEffect,
    useState,
    useTransition,
    type JSX,
    type ReactNode,
} from "react";
import { getActivitiesFromRawFilters, GetActivitiesFiltered } from "./actions";

export function ActivityList(props: { initialData: JSX.Element[] }) {
    const { initialData } = props;
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const tag_filters_raw = searchParams.get("tag_filters") || "";

    const [activities, setActivities] = useState<ReactNode[]>(initialData);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            setActivities(
                await getActivitiesFromRawFilters(query, tag_filters_raw),
            );
        });
    }, [query, tag_filters_raw]);
    return (
        <div className="flex flex-wrap content-start justify-center-safe gap-4 p-10">
            {isPending && <p>Loading...</p>}
            {!isPending && activities}
            {!isPending && activities.length == 0 && <p>No activity found.</p>}
        </div>
    );
}
