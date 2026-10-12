"use server";
import { FiltersClientSide } from "./filters_client";
import type { PageProps_ } from "./page";
import { parseTagFilters } from "./utils";
import { prisma } from "lib/prisma";

export async function Filters(props: PageProps_) {
    // let rawTagFilter: string|undefined;
    const searchParams = await props.searchParams;
    const rawTagFilters = searchParams["tag_filters"];

    let chosenTags: string[] = [];
    if (rawTagFilters && rawTagFilters != "") {
        chosenTags = parseTagFilters(rawTagFilters) ?? [];
    }
    const tags = await prisma.activityTag.findMany();

    return <FiltersClientSide tags={tags} chosenTags={chosenTags} />;
}
