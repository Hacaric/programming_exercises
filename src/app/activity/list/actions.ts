import type { Activity, ActivityTags } from "generated/prisma";
import { prisma } from "lib/prisma";

export async function GetActivity(id: number): Promise<Activity&{tags: ActivityTags|null} | null> {
    const activity = await prisma.activity.findUnique({
        where: {id: id},
        include: {tags: true}
    })
    if (!activity) {
        console.warn(`Warning: Activity not found (id: ${id})`)
        return null;
    }
    if (!activity.tags) {
        console.error(`Error: Activity (id: ${id}) defiend incorrecty, cannot be used: Missing ActivityTags.`)
        return null;
    }
    return activity;
}

export async function GetActivityTags(id: number) {
    const activity = await GetActivity(id);
    if (!activity || !activity.tags ||!activity.tags?.id) {
        return null;
    }
    const activityTags = await prisma.activityTags.findUnique({
        where: {id: activity.tags.id},
        include: {activityType: true, ageGroups: true, enviroments: true, preparation: true}
    })
    if (!activityTags) {return null;}
    return activityTags;
}
