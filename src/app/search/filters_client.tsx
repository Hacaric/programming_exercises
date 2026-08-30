"use client";
import { getTextColorBasedOnBacgroundColor } from "~/utils/colors";
import type { ActivityTagDBType } from "./actions";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";
import type { JSX } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { parseTagFilters } from "./utils";

// export function ActivityTagFilter(props: {name: string, color: string, tag: ActivityTagDBType}) {
//     const {name, color, tag} = props;

//     const backgroundOpacity = 64;
//     if (!(0 <= backgroundOpacity && backgroundOpacity <= 255)) {
//         return (
//             <div className="rounded-xl border-2 px-1 text-[11px]">
//                 Error loading tag: invalid backgroundOpacity value.
//             </div>
//         );
//     }
//     const backgroundColorHEX = backgroundOpacity.toString(16); // 16 means to hexadecimal - for rgb notation
//     return (
//         <div
//             key={name}
//             onClick={()=>handleTagClick(tag)}
//             className="my-0 max-h-6 rounded-xl border-2 px-1 text-[13px]"
//             // Note: we need to use the style attribute, because tailwindcss has problems with dynamically generating colors
//             // Unrelated note: We apply the color to border and make background the same color with smaller opacity
//             style={{
//                 borderColor: color,
//                 backgroundColor: `${color}${backgroundColorHEX}`,
//                 color:
//                     getTextColorBasedOnBacgroundColor(
//                         `${color}${backgroundColorHEX}`,
//                     ) ?? "#000000",
//             }}
//         >
//             {name}
//         </div>
//     );
// }

// function parseTagFilters(tag_filters_raw: string): [number[], string][] | null {
//     let tag_filters_parsed;
//     try {
//         tag_filters_parsed = JSON.parse(tag_filters_raw);
//     } catch {
//         console.error(
//             `Invalid search filter, ignoring: JSON failed to parse '${tag_filters_raw}'`,
//         );
//     }

//     if (!Array.isArray(tag_filters_parsed)) {
//         return null;
//     }

//     let isValid = true;
//     tag_filters_parsed.forEach((tag_filter) => {
//         if (!isValid) {
//             return;
//         }
//         if (
//             !Array.isArray(tag_filter) ||
//             tag_filter.length != 2 ||
//             !Array.isArray(tag_filter[0]) ||
//             !tag_filter[0].every((e) => typeof e == "number") ||
//             typeof tag_filter[1] != "number"
//         ) {
//             isValid = false;
//             return;
//         }
//     });
//     if (!isValid) {
//         return null;
//     }
//     return tag_filters_parsed;
// }

function handleTagClick(tag: ActivityTagDBType, searchParamsReadOnly: ReadonlyURLSearchParams, router: AppRouterInstance) {

    const params = new URLSearchParams(searchParamsReadOnly.toString());
    const filters = params.get("tag_filters");

    console.debug(`Hadling tag click: got filters(raw): ${filters}`)
    let filters_parsed: string[] = [];
    if (filters && filters != "") {
        filters_parsed = parseTagFilters(filters) ?? []; // parseTagFilters(filters)?.map((f)=>JSON.stringify(f)) ?? [];
    }
    console.debug(`Parsed tag filters: ${JSON.stringify(filters_parsed)}`)
    const current_tag_filter: string = tag.name;

    if (filters_parsed.includes(current_tag_filter)) {
        console.debug(filters_parsed);
        filters_parsed.splice(filters_parsed.indexOf(current_tag_filter), 1);
        console.debug(filters_parsed);
    } else {
        filters_parsed.push(current_tag_filter);
    }
    console.debug(`Done proper action with ${JSON.stringify(current_tag_filter)}: FILTERS = ${JSON.stringify(filters_parsed)}`)

    params.set("tag_filters", JSON.stringify(filters_parsed));
    router.push(`?${params.toString()}`);
}

function ActivityTag(props: { tagData: ActivityTagDBType }) {
    const searchParamsReadOnly = useSearchParams();
    const router = useRouter();

    const { tagData } = props;
    const name = tagData.name;
    const color = tagData.tagColor;

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
            onClick={(event) => {
                handleTagClick(tagData, searchParamsReadOnly, router);
            }}
            className="my-0 max-h-6 rounded-xl border-2 px-1 text-[13px] cursor-pointer"
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

export function FiltersClientSide(props: {
    tagsData: Map<string, ActivityTagDBType>;
    chosenTagsHashset: Set<string>;
}) {
    "use client";
    const { tagsData , chosenTagsHashset } = props;
    console.debug(`chosenTagsHashset: ${JSON.stringify(Array.from(chosenTagsHashset))}`)
    console.debug(`tagsData: ${JSON.stringify(Array.from(tagsData))}`)
    let chosenTags: JSX.Element[] = [];
    let unchosenTags: JSX.Element[] = [];

    tagsData.forEach((value, key) => {
        // TODO: key attribut should be unique, here it might not be if we have two tags from different categories with the same name
        // chosenTagsHashset.forEach((val)=>console.debug(val));
        // console.debug(`chosenTagsHashset.has(${JSON.stringify(key)})? ${chosenTagsHashset.has(JSON.stringify(key))}`)
        if (chosenTagsHashset.has(key)) {
            chosenTags.push(
                <ActivityTag tagData={value} key={value.name} />,
            );
        } else {
            unchosenTags.push(
                <ActivityTag tagData={value} key={value.name} />,
            );
        }
    });
    return (
        <div>
            <p>Chosen tags:</p>
            <div className="flex flex-wrap gap-px">{chosenTags}</div>
            <p>Unchosen tags:</p>
            <div className="flex flex-wrap gap-px">{unchosenTags}</div>
        </div>
    );
}
