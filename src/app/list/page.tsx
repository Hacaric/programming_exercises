import { GetActivities } from "./actions";
import { SearchBar } from "./searchbar";
import { ActivityList } from "./activitylist";

export default async function ListActivities() {
    const activities = await GetActivities();

    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="h-min flex-1 rounded-xl border-2 p-2">
                <h4 className="text-lg font-semibold">FILTERS</h4>
            </div>
            <div className="flex flex-5 flex-col gap-2">
                <SearchBar />
                <ActivityList initialData={activities} />
            </div>
        </div>
    );
}
