"use server"
import { getAllTagsData, type ActivityTagDBType } from "./actions";
import { FiltersClientSide } from "./filters_client";
import type { PageProps_ } from "./page";
import { parseTagFilters } from "./utils";


export async function Filters(props: PageProps_) {
    // let rawTagFilter: string|undefined;
    const searchParams = await props.searchParams;
    const rawTagFilters = Array.isArray(searchParams["tag_filters"])
        ? searchParams["tag_filters"][0]
        : searchParams["tag_filters"];

    let chosenTagsList: string[] | undefined;
    let chosenTagsHashset: Set<string> = new Set();
    if (rawTagFilters && rawTagFilters != "") {
        chosenTagsList = parseTagFilters(rawTagFilters) ?? [];
        chosenTagsHashset = new Set(chosenTagsList);
    }
    const tagData: Map<string, ActivityTagDBType> =
        await getAllTagsData();
    // tagData.forEach((val, key)=>{console.debug(`${JSON.stringify(key)}=${JSON.stringify(val)}`)})
    return (
        <FiltersClientSide
            tagsData={tagData}
            chosenTagsHashset={chosenTagsHashset}
        />
    );
}
