import { getActivityTagsJSX } from "~/app/list/activity";
import { GetActivity } from "../../list/actions";
// TODO: increase activity.views counter

export default async function ActivityDetail({
    params,
}: {
    params: { id: string };
}) {
    const { id: id_raw } = await params;
    const id = Number(id_raw);
    if (isNaN(id)) {
        return (
            <p className="ml-10">{`Error loading activity: Activity ID '${id_raw}' is not a number.`}</p>
        );
    }

    const activity = await GetActivity(id);
    if (!activity) {
        return (
            <p className="ml-10">{`Error loading activity: Activity with ID ${id_raw} not found.`}</p>
        );
    }

    const tags = getActivityTagsJSX(activity);
    return (
        <div className="mx-50 my-20 rounded-2xl border-1 p-5">
            <div className="text-align-center ml-1">
                <p className="text-2xl font-bold">{activity.name}</p>
            </div>
            <div className="mt-3 flex flex-wrap content-end gap-x-0.5 gap-y-1">
                {tags}
            </div>
            <p className="ml-1 pt-5 font-bold">Popis:</p>
            <p className="text-md m-2 align-top">{activity.description}</p>
        </div>
    );
}
