"use server";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import type { Activity, ActivityProperties } from "generated/prisma";
import { getTextColorBasedOnBacgroundColor } from "./colors";
import { prisma } from "lib/prisma";

export async function getActivityTagsJSX(activity: Activity) {
    const tags = await GetActivityProperites(activity.id);
    if (!tags) {
        return [];
    }
    const tags_elemets = tags.tags.map((tag) => (
        <ActivityTag
            name={tag.name}
            color={tag.tagColor}
            key={`type-${tag.name}`}
        />
    ));

    return tags_elemets;
}

export async function ActivityTag(props: { name: string; color: string }) {
    const { name, color } = props;
    const backgroundOpacity = 64;
    if (!(0 <= backgroundOpacity && backgroundOpacity <= 255)) {
        return (
            <div className="rounded-xl border-2 px-1 text-[11px]">
                Error loading tag: invalid backgroundOpacity value.
            </div>
        );
    }
    const backgroundColorHEX = backgroundOpacity.toString(16); // 16 means to hexadecimal - for rgb notation
    return (
        <div
            key={name}
            className="my-0 max-h-6 rounded-xl border-2 px-1 text-[13px]"
            // Note: we need to use the style attribute, because tailwindcss has problems with dynamically generating colors
            // Unrelated note: We apply the color to border and make background the same color with smaller opacity
            style={{
                borderColor: color,
                backgroundColor: `${color}${backgroundColorHEX}`,
                color:
                    getTextColorBasedOnBacgroundColor(
                        `${color}${backgroundColorHEX}`,
                    ) ?? "#000000",
            }}
        >
            {name}
        </div>
    );
}

export async function ActivityElement(
    id: number,
    name: string,
    description: string,
    tags: Array<ReactNode>,
) {
    const MAX_DESCRIPTION_PREVIEW_LENGHT = 170;
    return (
        <div
            key={id}
            className="border-slsk-blue-dark h-60 min-w-80 flex-1 overflow-hidden rounded-md border-2 transition-all duration-150 hover:bg-gray-100 hover:shadow-lg"
        >
            <a href={`/activity/${id}`} className="flex h-full flex-col p-2">
                <div>
                    <div className="text-align-center ml-1">
                        <p className="text-2xl font-bold">{name}</p>
                    </div>
                    <p className="text-md m-1">
                        {description.length > MAX_DESCRIPTION_PREVIEW_LENGHT
                            ? description.substring(
                                  0,
                                  MAX_DESCRIPTION_PREVIEW_LENGHT,
                              ) + "..."
                            : description}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-1">
                    <div className="flex flex-wrap gap-x-0.5 gap-y-1">
                        {tags}
                    </div>
                </div>
            </a>
        </div>
    );
}

export async function GetActivity(
    id: number,
): Promise<(Activity & { properties: ActivityProperties | null }) | null> {
    const activity = await prisma.activity.findUnique({
        where: { id: id },
        include: { properties: true },
    });
    if (!activity) {
        console.warn(`Warning: Activity not found (id: ${id})`);
        return null;
    }
    if (!activity.properties) {
        console.error(
            `Error: Activity (id: ${id}) defiend incorrecty, cannot be used: Missing activityProperites.`,
        );
        return null;
    }
    return activity;
}
export interface ActivityTagDBType {
    name: string;
    tagColor: string;
    belongsToActivityProperties: ActivityProperties[];
}

export async function getAllTagsData(): Promise<
    Map<string, ActivityTagDBType>
> {
    let tags: ActivityTagDBType[] = await prisma.activityTag.findMany({
        include: { belongsToActivityProperties: true },
    });

    // TODO: CLEANUP THIS FUCNTION

    // const tag_elements = tags.map(
    //     (tag) => <ActivityTagFilter key={tag.name} name={tag.name} color={tag.tagColor} tag={tag} /> //ActivityTagFilter(tag.name, tag.tagColor, tag)
    // )
    const tag_hashmap = new Map();
    for (let i = 0; i < tags.length; i++) {
        let curr_tag_data = tags[i];
        if (!curr_tag_data) {
            continue;
        }
        let key = curr_tag_data.name;
        tag_hashmap.set(key, curr_tag_data);
    }
    return tag_hashmap;
}

export async function GetActivityProperites(id: number) {
    const activity = await GetActivity(id);
    if (!activity || !activity.properties || !activity.properties?.id) {
        return null;
    }
    const activityProperites = await prisma.activityProperties.findUnique({
        where: { id: activity.properties.id },
        include: {
            tags: true,
        },
    });
    if (!activityProperites) {
        return null;
    }
    return activityProperites;
}
