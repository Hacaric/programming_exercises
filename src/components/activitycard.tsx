import type { ActivityWithTags } from "~/lib/types";
import { Tags } from "./tags";

export function ActivityCard(props: { activity: ActivityWithTags }) {
    const { id, name, description, tags } = props.activity;
    const MAX_DESCRIPTION_PREVIEW_LENGHT = 170;
    return (
        <div
            key={id}
            className="border-slsk-blue-dark h-60 min-w-80 flex-1 overflow-hidden rounded-md border-2 transition-all duration-150 hover:bg-gray-100 hover:shadow-lg"
        >
            <a href={`/activities/${id}`} className="flex h-full flex-col p-2">
                <div>
                    <div className="text-align-center ml-1">
                        <p className="text-2xl font-bold">{name}</p>
                    </div>
                    <p className="text-md m-1">
                        {description.length > MAX_DESCRIPTION_PREVIEW_LENGHT
                            ? description.substring(
                                  0,
                                  MAX_DESCRIPTION_PREVIEW_LENGHT,
                              ) + "..."
                            : description}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-1">
                    <div className="flex flex-wrap gap-x-0.5 gap-y-1 text-sm">
                        <Tags tags={tags} />
                    </div>
                </div>
            </a>
        </div>
    );
}
