import { prisma } from "lib/prisma";
import { GetActivityTags } from "./actions";
import type { ReactNode } from "react";

function ActivityTag(name: string, color: string) {
    return <div 
        key = {name} 
        className = 'text-[11px] border-2 rounded-xl px-1' 
        // Note: we seed to use the style attribute, because tailwindcss has problems with dynamically generating colors
        // We apply the color to border and make background the same color with smaller opacity
        style = {{borderColor: color, backgroundColor: `${color}0f`}}>
            {name}
        </div>
}

function ActivityElement(name: string, description: string, tags: Array<ReactNode>) {
    return <div key={name} className="border-1 border-black ">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm">{description.length > 50 ? description.substring(0, 50)+'...' : description}</p>
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