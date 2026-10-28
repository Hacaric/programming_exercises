"use server";

import type { Activity } from "generated/prisma";
import { prisma } from "lib/prisma";
import type { ActivityWithTags } from "./types";
import z from "zod";

export async function getActivity(id_UNSAFE: number): Promise<Activity | null> {
    const id: number = z.number().parse(id_UNSAFE);

    const activity: Activity | null = await prisma.activity.findUnique({
        where: { id },
    });
    if (!activity) {
        console.warn(`Queried activity not found! Activity ID: ${id}`);
        return null;
    }
    return activity;
}

export async function getActivityWithTags(
    id_UNSAFE: number,
): Promise<ActivityWithTags | null> {
    const id: number = z.number().parse(id_UNSAFE);

    const activity = prisma.activity.findUnique({
        where: { id },
        include: { tags: true },
    });
    if (!activity) {
        console.warn(`Queried activity not found! Activity ID: ${id}`);
        return null;
    }
    return activity;
}

export async function getActivities(): Promise<Activity[]> {
    const activities = prisma.activity.findMany();
    return activities;
}

export async function getActivitiesWithTags(): Promise<ActivityWithTags[]> {
    const activities = prisma.activity.findMany({ include: { tags: true } });
    return activities;
}
