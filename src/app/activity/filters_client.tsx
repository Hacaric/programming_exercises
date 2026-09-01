"use client";
import {
    ReadonlyURLSearchParams,
    useRouter,
    useSearchParams,
} from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { parseTagFilters } from "./utils";
import { Tag } from "~/components/tag";
import { ActivityTagType, type ActivityTag } from "generated/prisma";

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

function handleTagClick(
    tag: ActivityTag,
    searchParamsReadOnly: ReadonlyURLSearchParams,
    router: AppRouterInstance,
) {
    const params = new URLSearchParams(searchParamsReadOnly.toString());
    const filters = params.get("tag_filters");

    // console.debug(`Hadling tag click: got filters(raw): ${filters}`);
    let filters_parsed: string[] = [];
    if (filters && filters != "") {
        filters_parsed = parseTagFilters(filters) ?? []; // parseTagFilters(filters)?.map((f)=>JSON.stringify(f)) ?? [];
    }
    // console.debug(`Parsed tag filters: ${JSON.stringify(filters_parsed)}`);
    const current_tag_filter: string = tag.name;

    if (filters_parsed.includes(current_tag_filter)) {
        filters_parsed.splice(filters_parsed.indexOf(current_tag_filter), 1);
    } else {
        filters_parsed.push(current_tag_filter);
    }
    // console.debug(
    //     `Done proper action with ${JSON.stringify(current_tag_filter)}: FILTERS = ${JSON.stringify(filters_parsed)}`,
    // );

    params.set("tag_filters", JSON.stringify(filters_parsed));
    router.push(`?${params.toString()}`);
}

export function SelectTags(props: { tags: ActivityTag[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();

    return (
        <div className="flex flex-wrap gap-0.5">
            {props.tags.map((tag) => (
                <button
                    onClick={() => handleTagClick(tag, searchParams, router)}
                    className="cursor-pointer"
                    key={tag.name}
                >
                    <Tag tag={tag} />
                </button>
            ))}
        </div>
    );
}

export function FiltersClientSide(props: {
    tags: ActivityTag[];
    chosenTags: string[];
}) {
    "use client";
    let { tags, chosenTags: rawChosenTags } = props;

    const chosenTags = tags.filter((tag) => rawChosenTags.includes(tag.name));
    const unchosenTags = tags.filter(
        (tag) => !rawChosenTags.includes(tag.name),
    );

    const category_labels: Record<ActivityTagType, string> = {
        ACTIVITY_TYPE: "Typ aktivity",
        AGE_GROUP: "Vekové kategórie",
        ENVIROMENT: "Prostredie",
        PREPARATION: "Príprava"
    }

    return (
        <div>
            <h4 className="text-xl font-semibold">Vybrané parametre:</h4>
            {chosenTags.length > 0 ? (
                <div className="flex flex-wrap gap-px">
                    <SelectTags tags={chosenTags} />
                </div>
            ) : (
                <span className="ml-1 italic">Žiadne</span>
            )}
            <h4 className="text-xl font-semibold">Ostatné parametre:</h4>
            <div className="flex flex-col gap-1">
                {Object.entries(category_labels).map(([key, label]) => <div key={key}>
                    <h6 className="font-semibold">{label}:</h6>
                    <SelectTags
                        tags={unchosenTags.filter(
                            (tag) => tag.type == key,
                        )}
                    />
                </div>)}
            </div>
        </div>
    );
}
