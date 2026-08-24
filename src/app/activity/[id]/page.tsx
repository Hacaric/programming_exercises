import { GetActivity } from "../list/actions"
import { getActivityTagsJSX } from "../list/page";


export default async function ActivityDetail({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    if (isNaN(id)) {return {success: false as const, message: `Activity ID '${id}' is not a number.`};}
    
    const activity = await GetActivity(id);
    if (!activity) {return {success:false as const, message: `Activity with ID ${id} not found.`};}
    const tags = getActivityTagsJSX(activity);
    return <div className="mx-50 my-20 border-1 rounded-2xl p-5">
        <div className="text-align-center ml-1"><p className="text-2xl font-bold">{activity.name}</p></div>
        <div className="flex flex-wrap gap-x-0.5 gap-y-1 mt-3 content-end">{tags}</div>
        <p className="font-bold pt-5 ml-1">Popis:</p>
        <p className="text-md align-top ml-2">{activity.description}</p>
    </div>
}