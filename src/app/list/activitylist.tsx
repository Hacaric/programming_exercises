"use client";

import { useSearchParams } from "next/navigation";
import {
    useEffect,
    useState,
    useTransition,
    type JSX,
    type ReactNode,
} from "react";
import { GetActivities } from "./actions";

export function ActivityList(props: { initialData: JSX.Element[] }) {
    const { initialData } = props;
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const [activities, setActivities] = useState<ReactNode[]>(initialData);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            // Execute the Server Action
            const data = await GetActivities(query);
            setActivities(data);
        });
    }, [query]);
    return (
        <div className="flex flex-wrap content-start justify-center-safe gap-4 p-10">
            {activities}
        </div>
    );
}
