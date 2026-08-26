import { GetActivities } from "./actions";
import { SearchBar } from "./searchbar";
import { ActivityList } from "./activitylist";

export default async function ListActivities() {
    const activities = await GetActivities();

    return (
        <div className="grid grid-flow-col grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
            <div className="row-span-2 m-2 h-300 w-60 rounded-xl border-2 p-2">
                FILTERS
            </div>
            <SearchBar />
            <ActivityList initialData={activities} />
        </div>
    );
}
