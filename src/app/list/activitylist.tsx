"use client";

import { type JSX } from "react";

export function ActivityList(props: { activities: JSX.Element[] }) {
    const activities = props.activities;

    return (
        <div className="flex flex-wrap content-start justify-center-safe gap-4 p-10">
            {activities}
        </div>
    );
}
