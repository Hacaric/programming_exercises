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

function addTagFilter(
    tag: ActivityTag,
    searchParamsReadOnly: ReadonlyURLSearchParams,
    router: AppRouterInstance,
) {
    const params = new URLSearchParams(searchParamsReadOnly.toString());
    const filters = params.get("tag_filters");

    console.debug(`Adding tag filter: got filters(raw): ${filters}`);
    let filters_parsed: string[] = [];
    if (filters && filters != "") {
        filters_parsed = parseTagFilters(filters) ?? [];
    }
    const current_tag_filter: string = tag.name;

    if (filters_parsed.includes(current_tag_filter)) {
        return;
    }
    params.append("tag_filters", current_tag_filter);

    router.push(`?${params.toString()}`);
}

function deleteTagFilter(
    tag: ActivityTag,
    searchParamsReadOnly: ReadonlyURLSearchParams,
    router: AppRouterInstance,
) {
    const params = new URLSearchParams(searchParamsReadOnly.toString());
    const filters = params.get("tag_filters");
    console.debug(`Deleting tag filter: got filters(raw): '${filters}'`);

    // let filters_parsed: string[] = [];
    // if (filters && filters != "") {
    //     filters_parsed = parseTagFilters(filters) ?? [];
    // }

    // filters_parsed.forEach(f => console.log(`f: '${f}' comp: '${tag.name}' eq: ${f == tag.name}`))
    // filters_parsed = filters_parsed.filter(f=>f != tag.name);
    // console.log(`Final: ${JSON.stringify(filters)}`)

    params.delete("tag_filters", tag.name);

    console.log(`Delted '${tag.name}', params: ${params}'`)
    router.push(`?${params.toString()}`);
}

export function ClickableTagList(props: { tags: ActivityTag[], action: "select"|"deselect", disabled?: ActivityTag[]}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {tags, action, disabled:disabled_raw} = props;
    const disabled: Set<ActivityTag> = disabled_raw ? new Set(disabled_raw) : new Set();

    return (
        <div className="flex flex-wrap gap-0.5">
            {tags.map((tag) => {
                const is_disabled = disabled.has(tag);
                return <button
                    onClick={action=="select"&&!is_disabled ? () => addTagFilter(tag, searchParams, router) : () => deleteTagFilter(tag, searchParams, router)}
                    className={is_disabled ? `cursor-pointer` : `cursor-pointer`}
                    key={tag.name}
                >
                    <Tag 
                        tag={tag} 
                        overwriteBorderColor={is_disabled ? "#bbb" : undefined} 
                        overwriteBackgroundColor={is_disabled ? "#f0f0f0" : undefined} 
                        textColor={is_disabled ? "#222" : undefined} 
                        italicFont={is_disabled}
                    />
                </button>
            })}
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
    const unChosenTags = tags.filter((tag) => !rawChosenTags.includes(tag.name));

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
                        <ClickableTagList tags={chosenTags} action="deselect" />
                    </div>
                </>
            )}
            <h4 className="text-xl font-semibold">Všetky parametre:</h4>
            <div className="flex flex-col gap-1">
                {Object.entries(category_labels).map(([key, label]) => (
                    <div key={key}>
                        <h6 className="font-semibold">{label}:</h6>
                        <ClickableTagList
                            tags={tags.filter((tag) => tag.type == key)}
                            action="select"
                            disabled={chosenTags}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
