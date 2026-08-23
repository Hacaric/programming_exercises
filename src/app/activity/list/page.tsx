import { prisma } from "lib/prisma";
import { GetActivityTags } from "./actions";
import type { ReactNode } from "react";

function ActivityTag(name: string, color: string) {
    return <div key={name} className={`font-xs border-1 border-[${color}]`}>{name}</div>
}

function ActivityElement(name: string, description: string, tags: Array<ReactNode>) {
    return <div key={name} className="border-1 border-black ">
        <p className="font-bg">{name}</p>
        <p className="font-sm">{description}</p>
        <div className="flex">{tags}</div>
    </div>
}

export default async function ListActivities() {
    const activities = (await prisma.activity.findMany()).map(
        async (activity) => {
            const tags = await GetActivityTags(activity.id);
            if (!tags) {
                return null;
            }
            const tags_elemets = [];
            tags_elemets.push(
                tags.activityType.map(
                    (tag) => ActivityTag(tag.name, tag.tagColor)
                )
            );
            tags_elemets.push(
                tags.ageGroups.map(
                    (tag) => ActivityTag(tag.name, tag.tagColor)
                )
            );
            tags_elemets.push(
                tags.enviroments.map(
                    (tag) => ActivityTag(tag.name, tag.tagColor)
                )
            );
            tags_elemets.push(
                tags.preparation.map(
                    (tag) => ActivityTag(tag.name, tag.tagColor)
                )
            );
            return ActivityElement(activity.name, activity.description, tags_elemets);
        }
    );
    return <div className="grid grid-cols-4 p-10">
        {activities}
    </div>
}