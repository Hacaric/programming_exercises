import { GetAllActivities } from "../search/actions";
import { ActivityList } from "./activitylist";
import { SearchBar } from "./searchbar";

export default async function ListActivities() {
    const activities = await GetAllActivities();

    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-5 flex-col gap-2">
                <SearchBar />
                <ActivityList activities={activities} />
            </div>
        </div>
    );
}
