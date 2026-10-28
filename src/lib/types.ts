import type { Prisma } from "generated/prisma";
import { ActivitySchema, ActivityTagSchema } from "prisma/generated/zod";
import z from "zod";

export const ActivityWithTagsSchema = ActivitySchema.extend({
    tags: z.array(ActivityTagSchema)
})

export type ActivityWithTags = Prisma.ActivityGetPayload<{
    include: { tags: true };
}>;
