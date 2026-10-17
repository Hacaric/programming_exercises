import { Tags } from "./tags";
import { useState, type MouseEvent } from "react";
import type { AuthSession } from "~/app/account/page";
import { server_setIsStarred } from "~/app/activity/actions";
import type { ActivitiesWithStarData } from "~/app/activity/activitylist";

export function ActivityCard(props: {
    activity: ActivitiesWithStarData;
    loggedIn: boolean;
}) {
    const {
        id,
        name,
        description,
        tags,
        isStarred: isStarredOnLoad,
    } = props.activity;
    const loggedIn = props.loggedIn;

    const [isStarred, setIsStarred] = useState<boolean>(isStarredOnLoad);
    const MAX_DESCRIPTION_PREVIEW_LENGHT = 170;

    async function handleStarClick(event: MouseEvent) {
        event.preventDefault(); // Prevent redirect to activity detail
        const state = isStarred; // Save state so we have the original value
        setIsStarred(!isStarred);
        console.debug(`Sending data: activityID: ${id}, state: ${state}`);
        const result = await server_setIsStarred(id, !state);
        if (result === null) {
            alert("Failed to star activity. Make sure you're logged in.");
            setIsStarred(false);
        }
    }
    return (
        <div
            key={id}
            className="border-slsk-blue-dark h-60 min-w-80 flex-1 overflow-hidden rounded-md border-2 transition-all duration-150 hover:bg-gray-100 hover:shadow-lg"
        >
            <a href={`/activity/${id}`} className="flex h-full flex-col p-2">
                <div
                    className="text-align-center ml-1 grid grid-cols-2"
                    style={{
                        gridTemplateColumns:
                            "auto 20px" /*If you can write this in tailwindcss, good luck, I gived up. Handy docs: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns, https://tailwindcss.com/docs/grid-template-columns*/,
                    }}
                >
                    <p className="text-2xl font-bold">
                        <span>{name}</span>
                    </p>
                    <div className="w-min justify-self-end">
                        {loggedIn && (
                            <button
                                className="cursor-pointer text-3xl"
                                onClick={(e) => handleStarClick(e)}
                            >
                                {isStarred ? (
                                    <span className="text-yellow-400">
                                        &#9733;
                                    </span>
                                ) : (
                                    <span className="text-black">&#9734;</span>
                                )}
                            </button>
                        )}
                    </div>
                </div>
                <p className="text-md col-span-2 m-1">
                    {description.length > MAX_DESCRIPTION_PREVIEW_LENGHT
                        ? description.substring(
                              0,
                              MAX_DESCRIPTION_PREVIEW_LENGHT,
                          ) + "..."
                        : description}
                </p>
                <div className="col-span-2 mt-auto flex items-center justify-between gap-1">
                    <div className="flex flex-wrap gap-x-0.5 gap-y-1 text-sm">
                        <Tags tags={tags} />
                    </div>
                </div>
            </a>
        </div>
    );
}
