import type { Prisma } from "generated/prisma";

export type ActivityWithTags = Prisma.ActivityGetPayload<{
    include: { tags: true };
}>;
