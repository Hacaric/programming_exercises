"use client";
import {
    type ReadonlyURLSearchParams,
    useRouter,
    useSearchParams,
} from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { parseTagFilters } from "./utils";
import { Tag } from "~/components/tag";
import type { ActivityTagType, ActivityTag } from "generated/prisma";

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
    const { tags, chosenTags: rawChosenTags } = props;

    const chosenTags = tags.filter((tag) => rawChosenTags.includes(tag.name));

    const category_labels: Record<ActivityTagType, string> = {
        ACTIVITY_TYPE: "Typ aktivity",
        AGE_GROUP: "Vekové kategórie",
        ENVIROMENT: "Prostredie",
        PREPARATION: "Príprava",
    };

    return (
        <div>
            <h3 className="text-center text-2xl font-bold">Filter</h3>
            {chosenTags.length > 0 && (
                <>
                    <h4 className="text-xl font-semibold">
                        Vybrané parametre:
                    </h4>
                    <div className="flex flex-wrap gap-px">
                        <SelectTags tags={chosenTags} />
                    </div>
                </>
            )}
            <h4 className="text-xl font-semibold">Všetky parametre:</h4>
            <div className="flex flex-col gap-1">
                {Object.entries(category_labels).map(([key, label]) => (
                    <div key={key}>
                        <h6 className="font-semibold">{label}:</h6>
                        <SelectTags
                            tags={tags.filter((tag) => tag.type == key)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
