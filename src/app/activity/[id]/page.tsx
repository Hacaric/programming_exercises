// TODO: increase activity.views counter

import { Tags } from "~/components/tags";
import { getActivityWithTags } from "~/lib/activity";

export default async function ActivityDetail({
    params,
}: {
    params: { id: string };
}) {
    const { id: id_raw } = params;
    const id = Number(id_raw);
    if (isNaN(id)) {
        return (
            <p className="ml-10">{`Error loading activity: Activity ID '${id_raw}' is not a number.`}</p>
        );
    }

    const activity = await getActivityWithTags(id);
    if (!activity) {
        return (
            <p className="ml-10">{`Error loading activity: Activity with ID ${id_raw} not found.`}</p>
        );
    }

    return (
        <div className="border-slsk-blue-dark flex flex-col gap-2 rounded-2xl border-2 p-5">
            <div className="text-align-center">
                <h3 className="text-3xl font-bold">{activity.name}</h3>
                {}
            </div>
            <div className="flex flex-wrap content-end gap-x-0.5 gap-y-1">
                <Tags tags={activity.tags} />
            </div>
            <div>
                <h5 className="mt-3 text-xl font-bold">Popis:</h5>
                <p className="text-md ml-2">{activity.description}</p>

                <h5 className="mt-5 text-xl font-bold">Pravidlá:</h5>
                <p className="text-md ml-2">{activity.rules}</p>
            </div>
        </div>
    );
}
