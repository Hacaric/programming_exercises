import { GetActivities } from "./actions";
import { SearchBar } from "./searchbar";
import { ActivityList } from "./activitylist";

export default async function ListActivities() {
    const activities = await GetActivities();

    return <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] grid-flow-col">
        <div className="row-span-2 w-60 h-300 p-2 m-2 border-2 rounded-xl">FILTERS</div>
        <SearchBar /> 
        <ActivityList initialData={activities} />
   </div>
}
