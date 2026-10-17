import { getActivitiesFromRawFilters } from "./activity/actions";
import { SearchBar } from "./activity/searchbar";
import { ActivityList } from "./activity/activitylist";
import { Filters } from "./activity/filters_server";
import type { ActivityWithTags } from "~/lib/types";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";

export interface PageProps_ {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ListActivities({ searchParams }: PageProps_) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const loggedIn = !(session === null);

    const searchParamsAwaited = await searchParams;
    let activities: (ActivityWithTags & {isStarred: boolean})[] = [];

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
        // console.debug(`FILTERS: ${filters}`);

        activities = (await getActivitiesFromRawFilters(
            query ?? null,
            filters,
        )) ?? <></>;
    }

    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="h-min flex-1 rounded-xl border-2 p-2">
                <Filters searchParams={searchParams} />
            </div>
            <div className="flex flex-5 flex-col gap-2">
                <SearchBar />
                <ActivityList initialData={activities} loggedIn={loggedIn} />
            </div>
        </div>
    );
}
