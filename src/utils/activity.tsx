"use server";
import { GetActivityProperites } from "../app/search/actions";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import type { Activity } from "generated/prisma";
import { getTextColorBasedOnBacgroundColor } from "./colors";

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
        ))

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
            className="mt-1 h-60 w-80 flex-none grow cursor-pointer rounded-md border-2 border-black hover:mt-0 hover:mb-1 hover:bg-[#f4f4f4]"
        >
            <a href={`/activity/${id}`} className="grid h-full p-2">
                <div>
                    <div className="text-align-center ml-1">
                        <p className="text-2xl font-bold">{name}</p>
                    </div>
                    <p className="text-md m-1 align-top">
                        {description.length > MAX_DESCRIPTION_PREVIEW_LENGHT
                            ? description.substring(
                                  0,
                                  MAX_DESCRIPTION_PREVIEW_LENGHT,
                              ) + "..."
                            : description}
                    </p>
                </div>
                <div className="mt-3 flex flex-wrap content-end gap-x-0.5 gap-y-1">
                    {tags}
                </div>
            </a>
        </div>
    );
}
