import { prisma } from "lib/prisma";
import { ActivityElement, getActivityTagsJSX } from "./activity";

export default async function ListActivities() {
    const activities = (await prisma.activity.findMany()).map(
        async (activity) => {
            const tags = await getActivityTagsJSX(activity);
            return ActivityElement(activity.id, activity.name, activity.description, tags);
        }
    );
    return <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] grid-flow-col">
        <div className="row-span-2 w-60 h-300 p-2 m-2 border-2 rounded-xl">FILTERS</div>
        <p className="border-1 mt-2 ml-15 mr-10 h-10 border-black border-2 rounded-3xl flex px-3 align-content-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-0 mr-2 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            {/* <div className="w-[1px] bg-black h-7 self-center mx-2"></div> */}
            <input type="text" className="w-full focus:outline-0 font-bold font-xl pl-2" />
        </p>
        <div className="flex justify-center-safe flex-wrap gap-4 p-10 content-start">
                {activities}
                {/* {LOREM_IPSUM} */}
        </div>
    </div>
}
