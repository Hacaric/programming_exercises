import { GetActivitiesFiltered, getActivitiesFromRawFilters } from "./actions";
import { SearchBar } from "./searchbar";
import { ActivityList } from "./activitylist";
import { Filters } from "./filters_server";
import type { JSX } from "react";

export interface PageProps_ {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ListActivities({ searchParams }: PageProps_) {
    console.log(`SEARCH PARAMS: ${JSON.stringify(searchParams)}`);
    const searchParamsAwaited = await searchParams;
    let activities: JSX.Element[] = [];
    if (searchParamsAwaited) {
        let query: string[] | string | null = searchParamsAwaited["q"] ?? null;
        if (Array.isArray(query)) {
            query = query[0] ?? null;
        }
        let filters: string[] | string | null =
            searchParamsAwaited["tag_filters"] ?? null;
        if (Array.isArray(filters)) {
            filters = filters[0] ?? null;
        }
        console.debug(`FILTERS: ${filters}`);
        activities = (await getActivitiesFromRawFilters(
            query ?? null,
            filters,
        )) ?? <></>;
    }

    return (
        <div className="grid grid-flow-col grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
            <div className="row-span-2 m-2 h-300 w-60 rounded-xl border-2 p-2">
                <Filters searchParams={searchParams} />
            </div>
            <SearchBar />
            <ActivityList initialData={activities} />
        </div>
    );
}
