"use server";
import { GetActivityTags } from "./actions";
import type { ReactNode } from "react";
import type { Activity } from "generated/prisma";

export async function getActivityTagsJSX(activity: Activity) {
    const tags = await GetActivityTags(activity.id);
    if (!tags) {
        return [];
    }
    const tags_elemets = [];
    tags_elemets.push(
        tags.activityType.map((tag) => ActivityTag(tag.name, tag.tagColor)),
    );
    tags_elemets.push(
        tags.ageGroups.map((tag) => ActivityTag(tag.name, tag.tagColor)),
    );
    tags_elemets.push(
        tags.enviroments.map((tag) => ActivityTag(tag.name, tag.tagColor)),
    );
    tags_elemets.push(
        tags.preparation.map((tag) => ActivityTag(tag.name, tag.tagColor)),
    );
    return tags_elemets;
}

interface Color {
    red: number;
    green: number;
    blue: number;
    opacity?: number;
}

function colorFromHexString(color: string) {
    const hexRegex = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
    if (!hexRegex.test(color)) {
        return null;
    }
    if (color.length == 7) {
        return {
            red: Number(`0x${color.substring(1, 3)}`),
            green: Number(`0x${color.substring(3, 5)}`),
            blue: Number(`0x${color.substring(5, 7)}`),
        };
    } else if (color.length == 4) {
        return {
            red: Number(`0x${color.substring(1, 2)}`),
            green: Number(`0x${color.substring(2, 3)}`),
            blue: Number(`0x${color.substring(3, 4)}`),
        };
    } else if (color.length == 9) {
        const output = {
            red: Number(`0x${color.substring(1, 3)}`),
            green: Number(`0x${color.substring(3, 5)}`),
            blue: Number(`0x${color.substring(5, 7)}`),
            opacity: Number(`0x${color.substring(7, 9)}`),
        };

        return output;
    }
    console.error(
        `Not implemented (blame this on devs, especially Hacaric): cannot determine rgb value of '${color}'`,
    );
    return null;
}

function getTextColorBasedOnBacgroundColor(backgroundColor: Color | string) {
    const color = calculate_RGB_from_RGBA_on_white_background(backgroundColor);
    if (!color) {
        console.warn(
            `getTextColorBasedOnBacgroundColor(): Invalid color: ${backgroundColor}`,
        );
        return null;
    }
    // console.debug(`BG COLOR: ${backgroundColor}; returning ${(color.red*0.299 + color.green*0.587 + color.blue*0.114) > 186 ? '#000000' : '#ffffff'}`)
    // Source: https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    // return (color.red*0.299 + color.green*0.587 + color.blue*0.114) > 186 ? '#000000' : '#ffffff';
    return color.red * 0.299 + color.green * 0.587 + color.blue * 0.114 > 186
        ? "#000000"
        : "#ffffff";
}

function calculate_RGB_from_RGBA_on_white_background(
    color: string | Color,
): Color | null {
    if (typeof color == "string") {
        const color_ = colorFromHexString(color);
        if (!color_) {
            return null;
        }
        color = color_;
    }

    if (!color.opacity) {
        return color;
    }
    const result = {
        red: 255 - (color.opacity / 255) * (255 - color.red),
        green: 255 - (color.opacity / 255) * (255 - color.green),
        blue: 255 - (color.opacity / 255) * (255 - color.blue),
    };
    return result;
}

async function ActivityTag(name: string, color: string) {
    const backgroundOpacity = 64;
    if (!(0 <= backgroundOpacity && backgroundOpacity <= 255)) {
        return (
            <div className="rounded-xl border-2 px-1 text-[11px]">
                Error loading tag: invalid backgroundOpacity value.
            </div>
        );
    }
    const backgroundColorHEX = backgroundOpacity.toString(16);
    return (
        <div
            key={name}
            className="my-0 max-h-6 rounded-xl border-2 px-1 text-[13px]"
            // Note: we seed to use the style attribute, because tailwindcss has problems with dynamically generating colors
            // We apply the color to border and make background the same color with smaller opacity
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
            className="border-slsk-blue-dark h-60 min-w-80 flex-1 rounded-md border-2 overflow-hidden transition-all duration-150 hover:bg-gray-100 hover:shadow-lg"
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
                <div className="mt-auto flex flex-wrap gap-x-0.5 gap-y-1">
                    {tags}
                </div>
            </a>
        </div>
    );
}
