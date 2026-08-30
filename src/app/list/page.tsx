import { GetAllActivities } from "../search/actions";
import { ActivityList } from "./activitylist";
import { SearchBar } from "./searchbar";

export default async function ListActivities() {
    const activities = await GetAllActivities();

    return (
        <div className="grid w-full grid-flow-col grid-cols-1 grid-rows-[auto_1fr]">
            <SearchBar />
            <ActivityList activities={activities} />
        </div>
    );
}
