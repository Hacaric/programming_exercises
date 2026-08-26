import { getActivityTagsJSX } from "~/app/list/activity";
import { GetActivity } from "../../list/actions"


export default async function ActivityDetail({ params }: { params: { id: string } }) {
    const { id: id_raw } = await params;
    const id = Number(id_raw);
    if (isNaN(id)) {return <p className="ml-10">{`Error loading activity: Activity ID '${id_raw}' is not a number.`}</p>}
    
    const activity = await GetActivity(id);
    if (!activity) {return <p className="ml-10">{`Error loading activity: Activity with ID ${id_raw} not found.`}</p>}

    const tags = getActivityTagsJSX(activity);
    return <div className="mx-50 my-20 border-1 rounded-2xl p-5">
        <div className="text-align-center ml-1"><p className="text-2xl font-bold">{activity.name}</p></div>
        <div className="flex flex-wrap gap-x-0.5 gap-y-1 mt-3 content-end">{tags}</div>
        <p className="font-bold pt-5 ml-1">Popis:</p>
        <p className="text-md align-top m-2">{activity.description}</p>
    </div>
}