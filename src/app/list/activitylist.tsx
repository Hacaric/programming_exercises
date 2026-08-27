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

export function ActivityList() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const [activities, setActivities] = useState<ReactNode[]>([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            // Execute the Server Action
            const data = await GetActivities(query);
            setActivities(data);
        });
    }, [query]);
    return (
        <div className="flex gap-2 flex-wrap">
            {isPending && <p>Loading...</p>}
            {!isPending && activities}
            {!isPending && activities.length == 0 && query != "" && (
                <p>Žiadna hra sa nenašla</p>
            )}
        </div>
    );
}
