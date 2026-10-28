import { z } from "zod";
import type { Prisma } from "../../../generated/prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
    "ReadUncommitted",
    "ReadCommitted",
    "RepeatableRead",
    "Serializable",
]);

export const ActivityTagScalarFieldEnumSchema = z.enum([
    "name",
    "tagColor",
    "type",
]);

export const ActivityScalarFieldEnumSchema = z.enum([
    "id",
    "name",
    "description",
    "rules",
    "neededItems",
    "minDurationMinutes",
    "maxDurationMinutes",
    "views",
    "createdAt",
    "updatedAt",
    "createdById",
]);

export const PostScalarFieldEnumSchema = z.enum([
    "id",
    "name",
    "createdAt",
    "updatedAt",
    "createdById",
]);

export const UserScalarFieldEnumSchema = z.enum([
    "id",
    "name",
    "username",
    "email",
    "emailVerified",
    "image",
    "createdAt",
    "updatedAt",
]);

export const UserActivityStartScalarFieldEnumSchema = z.enum([
    "userID",
    "activityID",
]);

export const SessionScalarFieldEnumSchema = z.enum([
    "id",
    "expiresAt",
    "token",
    "createdAt",
    "updatedAt",
    "ipAddress",
    "userAgent",
    "userId",
]);

export const AccountScalarFieldEnumSchema = z.enum([
    "id",
    "accountId",
    "providerId",
    "userId",
    "accessToken",
    "refreshToken",
    "idToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
    "scope",
    "password",
    "createdAt",
    "updatedAt",
    "issuer",
]);

export const VerificationScalarFieldEnumSchema = z.enum([
    "id",
    "identifier",
    "value",
    "expiresAt",
    "createdAt",
    "updatedAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const ActivityTagOrderByRelevanceFieldEnumSchema = z.enum([
    "name",
    "tagColor",
]);

export const NullsOrderSchema = z.enum(["first", "last"]);

export const ActivityOrderByRelevanceFieldEnumSchema = z.enum([
    "name",
    "description",
    "rules",
    "neededItems",
    "createdById",
]);

export const PostOrderByRelevanceFieldEnumSchema = z.enum([
    "id",
    "name",
    "createdById",
]);

export const UserOrderByRelevanceFieldEnumSchema = z.enum([
    "id",
    "name",
    "username",
    "email",
    "image",
]);

export const UserActivityStartOrderByRelevanceFieldEnumSchema = z.enum([
    "userID",
]);

export const SessionOrderByRelevanceFieldEnumSchema = z.enum([
    "id",
    "token",
    "ipAddress",
    "userAgent",
    "userId",
]);

export const AccountOrderByRelevanceFieldEnumSchema = z.enum([
    "id",
    "accountId",
    "providerId",
    "userId",
    "accessToken",
    "refreshToken",
    "idToken",
    "scope",
    "password",
    "issuer",
]);

export const VerificationOrderByRelevanceFieldEnumSchema = z.enum([
    "id",
    "identifier",
    "value",
]);

export const ActivityTagTypeSchema = z.enum([
    "AGE_GROUP",
    "ACTIVITY_TYPE",
    "PREPARATION",
    "ENVIROMENT",
]);

export type ActivityTagTypeType = `${z.infer<typeof ActivityTagTypeSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACTIVITY TAG SCHEMA
/////////////////////////////////////////

export const ActivityTagSchema = z.object({
    type: ActivityTagTypeSchema,
    name: z.string(),
    tagColor: z.string(),
});

export type ActivityTag = z.infer<typeof ActivityTagSchema>;

/////////////////////////////////////////
// ACTIVITY SCHEMA
/////////////////////////////////////////

export const ActivitySchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    rules: z.string(),
    neededItems: z.string().nullable(),
    minDurationMinutes: z.number().int().nullable(),
    maxDurationMinutes: z.number().int(),
    views: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdById: z.string(),
});

export type Activity = z.infer<typeof ActivitySchema>;

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
    id: z.cuid(),
    name: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdById: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// USER ACTIVITY START SCHEMA
/////////////////////////////////////////

export const UserActivityStartSchema = z.object({
    userID: z.string(),
    activityID: z.number().int(),
});

export type UserActivityStart = z.infer<typeof UserActivityStartSchema>;

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    userId: z.string(),
});

export type Session = z.infer<typeof SessionSchema>;

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
    id: z.string(),
    accountId: z.string(),
    providerId: z.string(),
    userId: z.string(),
    accessToken: z.string().nullable(),
    refreshToken: z.string().nullable(),
    idToken: z.string().nullable(),
    accessTokenExpiresAt: z.coerce.date().nullable(),
    refreshTokenExpiresAt: z.coerce.date().nullable(),
    scope: z.string().nullable(),
    password: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    issuer: z.string().nullable(),
});

export type Account = z.infer<typeof AccountSchema>;

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type Verification = z.infer<typeof VerificationSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACTIVITY TAG
//------------------------------------------------------

export const ActivityTagIncludeSchema: z.ZodType<Prisma.ActivityTagInclude> = z
    .object({
        activities: z
            .union([z.boolean(), z.lazy(() => ActivityFindManyArgsSchema)])
            .optional(),
        _count: z
            .union([
                z.boolean(),
                z.lazy(() => ActivityTagCountOutputTypeArgsSchema),
            ])
            .optional(),
    })
    .strict();

export const ActivityTagArgsSchema: z.ZodType<Prisma.ActivityTagDefaultArgs> = z
    .object({
        select: z.lazy(() => ActivityTagSelectSchema).optional(),
        include: z.lazy(() => ActivityTagIncludeSchema).optional(),
    })
    .strict();

export const ActivityTagCountOutputTypeArgsSchema: z.ZodType<Prisma.ActivityTagCountOutputTypeDefaultArgs> =
    z
        .object({
            select: z
                .lazy(() => ActivityTagCountOutputTypeSelectSchema)
                .nullish(),
        })
        .strict();

export const ActivityTagCountOutputTypeSelectSchema: z.ZodType<Prisma.ActivityTagCountOutputTypeSelect> =
    z
        .object({
            activities: z.boolean().optional(),
        })
        .strict();

export const ActivityTagSelectSchema: z.ZodType<Prisma.ActivityTagSelect> = z
    .object({
        name: z.boolean().optional(),
        tagColor: z.boolean().optional(),
        type: z.boolean().optional(),
        activities: z
            .union([z.boolean(), z.lazy(() => ActivityFindManyArgsSchema)])
            .optional(),
        _count: z
            .union([
                z.boolean(),
                z.lazy(() => ActivityTagCountOutputTypeArgsSchema),
            ])
            .optional(),
    })
    .strict();

// ACTIVITY
//------------------------------------------------------

export const ActivityIncludeSchema: z.ZodType<Prisma.ActivityInclude> = z
    .object({
        tags: z
            .union([z.boolean(), z.lazy(() => ActivityTagFindManyArgsSchema)])
            .optional(),
        createdBy: z
            .union([z.boolean(), z.lazy(() => UserArgsSchema)])
            .optional(),
        stars: z
            .union([
                z.boolean(),
                z.lazy(() => UserActivityStartFindManyArgsSchema),
            ])
            .optional(),
        _count: z
            .union([
                z.boolean(),
                z.lazy(() => ActivityCountOutputTypeArgsSchema),
            ])
            .optional(),
    })
    .strict();

export const ActivityArgsSchema: z.ZodType<Prisma.ActivityDefaultArgs> = z
    .object({
        select: z.lazy(() => ActivitySelectSchema).optional(),
        include: z.lazy(() => ActivityIncludeSchema).optional(),
    })
    .strict();

export const ActivityCountOutputTypeArgsSchema: z.ZodType<Prisma.ActivityCountOutputTypeDefaultArgs> =
    z
        .object({
            select: z.lazy(() => ActivityCountOutputTypeSelectSchema).nullish(),
        })
        .strict();

export const ActivityCountOutputTypeSelectSchema: z.ZodType<Prisma.ActivityCountOutputTypeSelect> =
    z
        .object({
            tags: z.boolean().optional(),
            stars: z.boolean().optional(),
        })
        .strict();

export const ActivitySelectSchema: z.ZodType<Prisma.ActivitySelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        rules: z.boolean().optional(),
        neededItems: z.boolean().optional(),
        minDurationMinutes: z.boolean().optional(),
        maxDurationMinutes: z.boolean().optional(),
        views: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdById: z.boolean().optional(),
        tags: z
            .union([z.boolean(), z.lazy(() => ActivityTagFindManyArgsSchema)])
            .optional(),
        createdBy: z
            .union([z.boolean(), z.lazy(() => UserArgsSchema)])
            .optional(),
        stars: z
            .union([
                z.boolean(),
                z.lazy(() => UserActivityStartFindManyArgsSchema),
            ])
            .optional(),
        _count: z
            .union([
                z.boolean(),
                z.lazy(() => ActivityCountOutputTypeArgsSchema),
            ])
            .optional(),
    })
    .strict();

// POST
//------------------------------------------------------

export const PostIncludeSchema: z.ZodType<Prisma.PostInclude> = z
    .object({
        createdBy: z
            .union([z.boolean(), z.lazy(() => UserArgsSchema)])
            .optional(),
    })
    .strict();

export const PostArgsSchema: z.ZodType<Prisma.PostDefaultArgs> = z
    .object({
        select: z.lazy(() => PostSelectSchema).optional(),
        include: z.lazy(() => PostIncludeSchema).optional(),
    })
    .strict();

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdById: z.boolean().optional(),
        createdBy: z
            .union([z.boolean(), z.lazy(() => UserArgsSchema)])
            .optional(),
    })
    .strict();

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
    .object({
        sessions: z
            .union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
            .optional(),
        accounts: z
            .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
            .optional(),
        posts: z
            .union([z.boolean(), z.lazy(() => PostFindManyArgsSchema)])
            .optional(),
        createdActivities: z
            .union([z.boolean(), z.lazy(() => ActivityFindManyArgsSchema)])
            .optional(),
        stars: z
            .union([
                z.boolean(),
                z.lazy(() => UserActivityStartFindManyArgsSchema),
            ])
            .optional(),
        _count: z
            .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
            .optional(),
    })
    .strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
    .object({
        select: z.lazy(() => UserSelectSchema).optional(),
        include: z.lazy(() => UserIncludeSchema).optional(),
    })
    .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> =
    z
        .object({
            select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
        })
        .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
    z
        .object({
            sessions: z.boolean().optional(),
            accounts: z.boolean().optional(),
            posts: z.boolean().optional(),
            createdActivities: z.boolean().optional(),
            stars: z.boolean().optional(),
        })
        .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        username: z.boolean().optional(),
        email: z.boolean().optional(),
        emailVerified: z.boolean().optional(),
        image: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        sessions: z
            .union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
            .optional(),
        accounts: z
            .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
            .optional(),
        posts: z
            .union([z.boolean(), z.lazy(() => PostFindManyArgsSchema)])
            .optional(),
        createdActivities: z
            .union([z.boolean(), z.lazy(() => ActivityFindManyArgsSchema)])
            .optional(),
        stars: z
            .union([
                z.boolean(),
                z.lazy(() => UserActivityStartFindManyArgsSchema),
            ])
            .optional(),
        _count: z
            .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
            .optional(),
    })
    .strict();

// USER ACTIVITY START
//------------------------------------------------------

export const UserActivityStartIncludeSchema: z.ZodType<Prisma.UserActivityStartInclude> =
    z
        .object({
            user: z
                .union([z.boolean(), z.lazy(() => UserArgsSchema)])
                .optional(),
            activity: z
                .union([z.boolean(), z.lazy(() => ActivityArgsSchema)])
                .optional(),
        })
        .strict();

export const UserActivityStartArgsSchema: z.ZodType<Prisma.UserActivityStartDefaultArgs> =
    z
        .object({
            select: z.lazy(() => UserActivityStartSelectSchema).optional(),
            include: z.lazy(() => UserActivityStartIncludeSchema).optional(),
        })
        .strict();

export const UserActivityStartSelectSchema: z.ZodType<Prisma.UserActivityStartSelect> =
    z
        .object({
            userID: z.boolean().optional(),
            activityID: z.boolean().optional(),
            user: z
                .union([z.boolean(), z.lazy(() => UserArgsSchema)])
                .optional(),
            activity: z
                .union([z.boolean(), z.lazy(() => ActivityArgsSchema)])
                .optional(),
        })
        .strict();

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    })
    .strict();

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z
    .object({
        select: z.lazy(() => SessionSelectSchema).optional(),
        include: z.lazy(() => SessionIncludeSchema).optional(),
    })
    .strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
    .object({
        id: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        token: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        ipAddress: z.boolean().optional(),
        userAgent: z.boolean().optional(),
        userId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    })
    .strict();

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    })
    .strict();

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z
    .object({
        select: z.lazy(() => AccountSelectSchema).optional(),
        include: z.lazy(() => AccountIncludeSchema).optional(),
    })
    .strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z
    .object({
        id: z.boolean().optional(),
        accountId: z.boolean().optional(),
        providerId: z.boolean().optional(),
        userId: z.boolean().optional(),
        accessToken: z.boolean().optional(),
        refreshToken: z.boolean().optional(),
        idToken: z.boolean().optional(),
        accessTokenExpiresAt: z.boolean().optional(),
        refreshTokenExpiresAt: z.boolean().optional(),
        scope: z.boolean().optional(),
        password: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        issuer: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    })
    .strict();

// VERIFICATION
//------------------------------------------------------

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z
    .object({
        id: z.boolean().optional(),
        identifier: z.boolean().optional(),
        value: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
    })
    .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ActivityTagWhereInputSchema: z.ZodType<Prisma.ActivityTagWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => ActivityTagWhereInputSchema),
                z.lazy(() => ActivityTagWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ActivityTagWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ActivityTagWhereInputSchema),
                z.lazy(() => ActivityTagWhereInputSchema).array(),
            ])
            .optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        tagColor: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        type: z
            .union([
                z.lazy(() => EnumActivityTagTypeFilterSchema),
                z.lazy(() => ActivityTagTypeSchema),
            ])
            .optional(),
        activities: z.lazy(() => ActivityListRelationFilterSchema).optional(),
    });

export const ActivityTagOrderByWithRelationInputSchema: z.ZodType<Prisma.ActivityTagOrderByWithRelationInput> =
    z.strictObject({
        name: z.lazy(() => SortOrderSchema).optional(),
        tagColor: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        activities: z
            .lazy(() => ActivityOrderByRelationAggregateInputSchema)
            .optional(),
        _relevance: z
            .lazy(() => ActivityTagOrderByRelevanceInputSchema)
            .optional(),
    });

export const ActivityTagWhereUniqueInputSchema: z.ZodType<Prisma.ActivityTagWhereUniqueInput> =
    z
        .object({
            name: z.string(),
        })
        .and(
            z.strictObject({
                name: z.string().optional(),
                AND: z
                    .union([
                        z.lazy(() => ActivityTagWhereInputSchema),
                        z.lazy(() => ActivityTagWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => ActivityTagWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => ActivityTagWhereInputSchema),
                        z.lazy(() => ActivityTagWhereInputSchema).array(),
                    ])
                    .optional(),
                tagColor: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                type: z
                    .union([
                        z.lazy(() => EnumActivityTagTypeFilterSchema),
                        z.lazy(() => ActivityTagTypeSchema),
                    ])
                    .optional(),
                activities: z
                    .lazy(() => ActivityListRelationFilterSchema)
                    .optional(),
            }),
        );

export const ActivityTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.ActivityTagOrderByWithAggregationInput> =
    z.strictObject({
        name: z.lazy(() => SortOrderSchema).optional(),
        tagColor: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => ActivityTagCountOrderByAggregateInputSchema)
            .optional(),
        _max: z
            .lazy(() => ActivityTagMaxOrderByAggregateInputSchema)
            .optional(),
        _min: z
            .lazy(() => ActivityTagMinOrderByAggregateInputSchema)
            .optional(),
    });

export const ActivityTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ActivityTagScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => ActivityTagScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => ActivityTagScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ActivityTagScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ActivityTagScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => ActivityTagScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        name: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        tagColor: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        type: z
            .union([
                z.lazy(() => EnumActivityTagTypeWithAggregatesFilterSchema),
                z.lazy(() => ActivityTagTypeSchema),
            ])
            .optional(),
    });

export const ActivityWhereInputSchema: z.ZodType<Prisma.ActivityWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => ActivityWhereInputSchema),
                z.lazy(() => ActivityWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ActivityWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ActivityWhereInputSchema),
                z.lazy(() => ActivityWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        description: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        rules: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        neededItems: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([z.lazy(() => IntFilterSchema), z.number()])
            .optional(),
        views: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        createdById: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        tags: z.lazy(() => ActivityTagListRelationFilterSchema).optional(),
        createdBy: z
            .union([
                z.lazy(() => UserScalarRelationFilterSchema),
                z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        stars: z
            .lazy(() => UserActivityStartListRelationFilterSchema)
            .optional(),
    });

export const ActivityOrderByWithRelationInputSchema: z.ZodType<Prisma.ActivityOrderByWithRelationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        rules: z.lazy(() => SortOrderSchema).optional(),
        neededItems: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        minDurationMinutes: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        tags: z
            .lazy(() => ActivityTagOrderByRelationAggregateInputSchema)
            .optional(),
        createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        stars: z
            .lazy(() => UserActivityStartOrderByRelationAggregateInputSchema)
            .optional(),
        _relevance: z
            .lazy(() => ActivityOrderByRelevanceInputSchema)
            .optional(),
    });

export const ActivityWhereUniqueInputSchema: z.ZodType<Prisma.ActivityWhereUniqueInput> =
    z
        .object({
            id: z.number().int(),
        })
        .and(
            z.strictObject({
                id: z.number().int().optional(),
                AND: z
                    .union([
                        z.lazy(() => ActivityWhereInputSchema),
                        z.lazy(() => ActivityWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => ActivityWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => ActivityWhereInputSchema),
                        z.lazy(() => ActivityWhereInputSchema).array(),
                    ])
                    .optional(),
                name: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                description: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                rules: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                neededItems: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                minDurationMinutes: z
                    .union([
                        z.lazy(() => IntNullableFilterSchema),
                        z.number().int(),
                    ])
                    .optional()
                    .nullable(),
                maxDurationMinutes: z
                    .union([z.lazy(() => IntFilterSchema), z.number().int()])
                    .optional(),
                views: z
                    .union([z.lazy(() => IntFilterSchema), z.number().int()])
                    .optional(),
                createdAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                updatedAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                createdById: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                tags: z
                    .lazy(() => ActivityTagListRelationFilterSchema)
                    .optional(),
                createdBy: z
                    .union([
                        z.lazy(() => UserScalarRelationFilterSchema),
                        z.lazy(() => UserWhereInputSchema),
                    ])
                    .optional(),
                stars: z
                    .lazy(() => UserActivityStartListRelationFilterSchema)
                    .optional(),
            }),
        );

export const ActivityOrderByWithAggregationInputSchema: z.ZodType<Prisma.ActivityOrderByWithAggregationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        rules: z.lazy(() => SortOrderSchema).optional(),
        neededItems: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        minDurationMinutes: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => ActivityCountOrderByAggregateInputSchema)
            .optional(),
        _avg: z.lazy(() => ActivityAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ActivityMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ActivityMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => ActivitySumOrderByAggregateInputSchema).optional(),
    });

export const ActivityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ActivityScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => ActivityScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => ActivityScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ActivityScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ActivityScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => ActivityScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
            .optional(),
        name: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        description: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        rules: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        neededItems: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.lazy(() => IntNullableWithAggregatesFilterSchema),
                z.number(),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
            .optional(),
        views: z
            .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
            .optional(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        createdById: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
    });

export const PostWhereInputSchema: z.ZodType<Prisma.PostWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => PostWhereInputSchema),
                z.lazy(() => PostWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => PostWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PostWhereInputSchema),
                z.lazy(() => PostWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        createdById: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        createdBy: z
            .union([
                z.lazy(() => UserScalarRelationFilterSchema),
                z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
    });

export const PostOrderByWithRelationInputSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => PostOrderByRelevanceInputSchema).optional(),
    });

export const PostWhereUniqueInputSchema: z.ZodType<Prisma.PostWhereUniqueInput> =
    z
        .object({
            id: z.cuid(),
        })
        .and(
            z.strictObject({
                id: z.cuid().optional(),
                AND: z
                    .union([
                        z.lazy(() => PostWhereInputSchema),
                        z.lazy(() => PostWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => PostWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => PostWhereInputSchema),
                        z.lazy(() => PostWhereInputSchema).array(),
                    ])
                    .optional(),
                name: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                createdAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                updatedAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                createdById: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                createdBy: z
                    .union([
                        z.lazy(() => UserScalarRelationFilterSchema),
                        z.lazy(() => UserWhereInputSchema),
                    ])
                    .optional(),
            }),
        );

export const PostOrderByWithAggregationInputSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional(),
    });

export const PostScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => PostScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => PostScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PostScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        name: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        createdById: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
    });

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => UserWhereInputSchema),
                z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => UserWhereInputSchema),
                z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        username: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        email: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        emailVerified: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
        image: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
        accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
        posts: z.lazy(() => PostListRelationFilterSchema).optional(),
        createdActivities: z
            .lazy(() => ActivityListRelationFilterSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartListRelationFilterSchema)
            .optional(),
    });

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.lazy(() => SortOrderSchema).optional(),
        image: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        sessions: z
            .lazy(() => SessionOrderByRelationAggregateInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountOrderByRelationAggregateInputSchema)
            .optional(),
        posts: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional(),
        createdActivities: z
            .lazy(() => ActivityOrderByRelationAggregateInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartOrderByRelationAggregateInputSchema)
            .optional(),
        _relevance: z.lazy(() => UserOrderByRelevanceInputSchema).optional(),
    });

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
    z
        .union([
            z.object({
                id: z.string(),
                username: z.string(),
                email: z.string(),
            }),
            z.object({
                id: z.string(),
                username: z.string(),
            }),
            z.object({
                id: z.string(),
                email: z.string(),
            }),
            z.object({
                id: z.string(),
            }),
            z.object({
                username: z.string(),
                email: z.string(),
            }),
            z.object({
                username: z.string(),
            }),
            z.object({
                email: z.string(),
            }),
        ])
        .and(
            z.strictObject({
                id: z.string().optional(),
                username: z.string().optional(),
                email: z.string().optional(),
                AND: z
                    .union([
                        z.lazy(() => UserWhereInputSchema),
                        z.lazy(() => UserWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => UserWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => UserWhereInputSchema),
                        z.lazy(() => UserWhereInputSchema).array(),
                    ])
                    .optional(),
                name: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                emailVerified: z
                    .union([z.lazy(() => BoolFilterSchema), z.boolean()])
                    .optional(),
                image: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                createdAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                updatedAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                sessions: z
                    .lazy(() => SessionListRelationFilterSchema)
                    .optional(),
                accounts: z
                    .lazy(() => AccountListRelationFilterSchema)
                    .optional(),
                posts: z.lazy(() => PostListRelationFilterSchema).optional(),
                createdActivities: z
                    .lazy(() => ActivityListRelationFilterSchema)
                    .optional(),
                stars: z
                    .lazy(() => UserActivityStartListRelationFilterSchema)
                    .optional(),
            }),
        );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.lazy(() => SortOrderSchema).optional(),
        image: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
    });

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
                z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
                z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        name: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        username: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        email: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        emailVerified: z
            .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
            .optional(),
        image: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
    });

export const UserActivityStartWhereInputSchema: z.ZodType<Prisma.UserActivityStartWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => UserActivityStartWhereInputSchema),
                z.lazy(() => UserActivityStartWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserActivityStartWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => UserActivityStartWhereInputSchema),
                z.lazy(() => UserActivityStartWhereInputSchema).array(),
            ])
            .optional(),
        userID: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        activityID: z
            .union([z.lazy(() => IntFilterSchema), z.number()])
            .optional(),
        user: z
            .union([
                z.lazy(() => UserScalarRelationFilterSchema),
                z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        activity: z
            .union([
                z.lazy(() => ActivityScalarRelationFilterSchema),
                z.lazy(() => ActivityWhereInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartOrderByWithRelationInputSchema: z.ZodType<Prisma.UserActivityStartOrderByWithRelationInput> =
    z.strictObject({
        userID: z.lazy(() => SortOrderSchema).optional(),
        activityID: z.lazy(() => SortOrderSchema).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        activity: z
            .lazy(() => ActivityOrderByWithRelationInputSchema)
            .optional(),
        _relevance: z
            .lazy(() => UserActivityStartOrderByRelevanceInputSchema)
            .optional(),
    });

export const UserActivityStartWhereUniqueInputSchema: z.ZodType<Prisma.UserActivityStartWhereUniqueInput> =
    z
        .object({
            userID_activityID: z.lazy(
                () =>
                    UserActivityStartUserIDActivityIDCompoundUniqueInputSchema,
            ),
        })
        .and(
            z.strictObject({
                userID_activityID: z
                    .lazy(
                        () =>
                            UserActivityStartUserIDActivityIDCompoundUniqueInputSchema,
                    )
                    .optional(),
                AND: z
                    .union([
                        z.lazy(() => UserActivityStartWhereInputSchema),
                        z.lazy(() => UserActivityStartWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => UserActivityStartWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => UserActivityStartWhereInputSchema),
                        z.lazy(() => UserActivityStartWhereInputSchema).array(),
                    ])
                    .optional(),
                userID: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                activityID: z
                    .union([z.lazy(() => IntFilterSchema), z.number().int()])
                    .optional(),
                user: z
                    .union([
                        z.lazy(() => UserScalarRelationFilterSchema),
                        z.lazy(() => UserWhereInputSchema),
                    ])
                    .optional(),
                activity: z
                    .union([
                        z.lazy(() => ActivityScalarRelationFilterSchema),
                        z.lazy(() => ActivityWhereInputSchema),
                    ])
                    .optional(),
            }),
        );

export const UserActivityStartOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserActivityStartOrderByWithAggregationInput> =
    z.strictObject({
        userID: z.lazy(() => SortOrderSchema).optional(),
        activityID: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => UserActivityStartCountOrderByAggregateInputSchema)
            .optional(),
        _avg: z
            .lazy(() => UserActivityStartAvgOrderByAggregateInputSchema)
            .optional(),
        _max: z
            .lazy(() => UserActivityStartMaxOrderByAggregateInputSchema)
            .optional(),
        _min: z
            .lazy(() => UserActivityStartMinOrderByAggregateInputSchema)
            .optional(),
        _sum: z
            .lazy(() => UserActivityStartSumOrderByAggregateInputSchema)
            .optional(),
    });

export const UserActivityStartScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserActivityStartScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(
                    () => UserActivityStartScalarWhereWithAggregatesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartScalarWhereWithAggregatesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserActivityStartScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(
                    () => UserActivityStartScalarWhereWithAggregatesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartScalarWhereWithAggregatesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        userID: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        activityID: z
            .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
            .optional(),
    });

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => SessionWhereInputSchema),
                z.lazy(() => SessionWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => SessionWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => SessionWhereInputSchema),
                z.lazy(() => SessionWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        token: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        ipAddress: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userAgent: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        user: z
            .union([
                z.lazy(() => UserScalarRelationFilterSchema),
                z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
    });

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        ipAddress: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        userAgent: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => SessionOrderByRelevanceInputSchema).optional(),
    });

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> =
    z
        .union([
            z.object({
                id: z.string(),
                token: z.string(),
            }),
            z.object({
                id: z.string(),
            }),
            z.object({
                token: z.string(),
            }),
        ])
        .and(
            z.strictObject({
                id: z.string().optional(),
                token: z.string().optional(),
                AND: z
                    .union([
                        z.lazy(() => SessionWhereInputSchema),
                        z.lazy(() => SessionWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => SessionWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => SessionWhereInputSchema),
                        z.lazy(() => SessionWhereInputSchema).array(),
                    ])
                    .optional(),
                expiresAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                createdAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                updatedAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                ipAddress: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                userAgent: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                userId: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                user: z
                    .union([
                        z.lazy(() => UserScalarRelationFilterSchema),
                        z.lazy(() => UserWhereInputSchema),
                    ])
                    .optional(),
            }),
        );

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        ipAddress: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        userAgent: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => SessionCountOrderByAggregateInputSchema)
            .optional(),
        _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
    });

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        expiresAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        token: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
    });

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => AccountWhereInputSchema),
                z.lazy(() => AccountWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => AccountWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AccountWhereInputSchema),
                z.lazy(() => AccountWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        providerId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        accessToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        refreshToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        idToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.lazy(() => DateTimeNullableFilterSchema),
                z.coerce.date(),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.lazy(() => DateTimeNullableFilterSchema),
                z.coerce.date(),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        issuer: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        user: z
            .union([
                z.lazy(() => UserScalarRelationFilterSchema),
                z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
    });

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        accountId: z.lazy(() => SortOrderSchema).optional(),
        providerId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        refreshToken: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        idToken: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        accessTokenExpiresAt: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        refreshTokenExpiresAt: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        scope: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        password: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        issuer: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => AccountOrderByRelevanceInputSchema).optional(),
    });

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> =
    z
        .object({
            id: z.string(),
        })
        .and(
            z.strictObject({
                id: z.string().optional(),
                AND: z
                    .union([
                        z.lazy(() => AccountWhereInputSchema),
                        z.lazy(() => AccountWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => AccountWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => AccountWhereInputSchema),
                        z.lazy(() => AccountWhereInputSchema).array(),
                    ])
                    .optional(),
                accountId: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                providerId: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                userId: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                accessToken: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                refreshToken: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                idToken: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                accessTokenExpiresAt: z
                    .union([
                        z.lazy(() => DateTimeNullableFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional()
                    .nullable(),
                refreshTokenExpiresAt: z
                    .union([
                        z.lazy(() => DateTimeNullableFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional()
                    .nullable(),
                scope: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                password: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                createdAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                updatedAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                issuer: z
                    .union([
                        z.lazy(() => StringNullableFilterSchema),
                        z.string(),
                    ])
                    .optional()
                    .nullable(),
                user: z
                    .union([
                        z.lazy(() => UserScalarRelationFilterSchema),
                        z.lazy(() => UserWhereInputSchema),
                    ])
                    .optional(),
            }),
        );

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        accountId: z.lazy(() => SortOrderSchema).optional(),
        providerId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        refreshToken: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        idToken: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        accessTokenExpiresAt: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        refreshTokenExpiresAt: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        scope: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        password: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        issuer: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputSchema),
            ])
            .optional(),
        _count: z
            .lazy(() => AccountCountOrderByAggregateInputSchema)
            .optional(),
        _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
    });

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
                    .array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        accountId: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        providerId: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        userId: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        accessToken: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        issuer: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
    });

export const VerificationWhereInputSchema: z.ZodType<Prisma.VerificationWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => VerificationWhereInputSchema),
                z.lazy(() => VerificationWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => VerificationWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => VerificationWhereInputSchema),
                z.lazy(() => VerificationWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        identifier: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        value: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
    });

export const VerificationOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationOrderByWithRelationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        identifier: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _relevance: z
            .lazy(() => VerificationOrderByRelevanceInputSchema)
            .optional(),
    });

export const VerificationWhereUniqueInputSchema: z.ZodType<Prisma.VerificationWhereUniqueInput> =
    z
        .object({
            id: z.string(),
        })
        .and(
            z.strictObject({
                id: z.string().optional(),
                AND: z
                    .union([
                        z.lazy(() => VerificationWhereInputSchema),
                        z.lazy(() => VerificationWhereInputSchema).array(),
                    ])
                    .optional(),
                OR: z
                    .lazy(() => VerificationWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => VerificationWhereInputSchema),
                        z.lazy(() => VerificationWhereInputSchema).array(),
                    ])
                    .optional(),
                identifier: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                value: z
                    .union([z.lazy(() => StringFilterSchema), z.string()])
                    .optional(),
                expiresAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                createdAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
                updatedAt: z
                    .union([
                        z.lazy(() => DateTimeFilterSchema),
                        z.coerce.date(),
                    ])
                    .optional(),
            }),
        );

export const VerificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        identifier: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => VerificationCountOrderByAggregateInputSchema)
            .optional(),
        _max: z
            .lazy(() => VerificationMaxOrderByAggregateInputSchema)
            .optional(),
        _min: z
            .lazy(() => VerificationMinOrderByAggregateInputSchema)
            .optional(),
    });

export const VerificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(
                        () => VerificationScalarWhereWithAggregatesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => VerificationScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),
                z
                    .lazy(
                        () => VerificationScalarWhereWithAggregatesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        identifier: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        value: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
        expiresAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterSchema),
                z.coerce.date(),
            ])
            .optional(),
    });

export const ActivityTagCreateInputSchema: z.ZodType<Prisma.ActivityTagCreateInput> =
    z.strictObject({
        name: z.string(),
        tagColor: z.string(),
        type: z.lazy(() => ActivityTagTypeSchema),
        activities: z
            .lazy(() => ActivityCreateNestedManyWithoutTagsInputSchema)
            .optional(),
    });

export const ActivityTagUncheckedCreateInputSchema: z.ZodType<Prisma.ActivityTagUncheckedCreateInput> =
    z.strictObject({
        name: z.string(),
        tagColor: z.string(),
        type: z.lazy(() => ActivityTagTypeSchema),
        activities: z
            .lazy(() => ActivityUncheckedCreateNestedManyWithoutTagsInputSchema)
            .optional(),
    });

export const ActivityTagUpdateInputSchema: z.ZodType<Prisma.ActivityTagUpdateInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
        activities: z
            .lazy(() => ActivityUpdateManyWithoutTagsNestedInputSchema)
            .optional(),
    });

export const ActivityTagUncheckedUpdateInputSchema: z.ZodType<Prisma.ActivityTagUncheckedUpdateInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
        activities: z
            .lazy(() => ActivityUncheckedUpdateManyWithoutTagsNestedInputSchema)
            .optional(),
    });

export const ActivityTagCreateManyInputSchema: z.ZodType<Prisma.ActivityTagCreateManyInput> =
    z.strictObject({
        name: z.string(),
        tagColor: z.string(),
        type: z.lazy(() => ActivityTagTypeSchema),
    });

export const ActivityTagUpdateManyMutationInputSchema: z.ZodType<Prisma.ActivityTagUpdateManyMutationInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
    });

export const ActivityTagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ActivityTagUncheckedUpdateManyInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
    });

export const ActivityCreateInputSchema: z.ZodType<Prisma.ActivityCreateInput> =
    z.strictObject({
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tags: z
            .lazy(() => ActivityTagCreateNestedManyWithoutActivitiesInputSchema)
            .optional(),
        createdBy: z.lazy(
            () => UserCreateNestedOneWithoutCreatedActivitiesInputSchema,
        ),
        stars: z
            .lazy(
                () =>
                    UserActivityStartCreateNestedManyWithoutActivityInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedCreateInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateInput> =
    z.strictObject({
        id: z.number().int().optional(),
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdById: z.string(),
        tags: z
            .lazy(
                () =>
                    ActivityTagUncheckedCreateNestedManyWithoutActivitiesInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutActivityInputSchema,
            )
            .optional(),
    });

export const ActivityUpdateInputSchema: z.ZodType<Prisma.ActivityUpdateInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tags: z
            .lazy(() => ActivityTagUpdateManyWithoutActivitiesNestedInputSchema)
            .optional(),
        createdBy: z
            .lazy(
                () =>
                    UserUpdateOneRequiredWithoutCreatedActivitiesNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUpdateManyWithoutActivityNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedUpdateInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tags: z
            .lazy(
                () =>
                    ActivityTagUncheckedUpdateManyWithoutActivitiesNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutActivityNestedInputSchema,
            )
            .optional(),
    });

export const ActivityCreateManyInputSchema: z.ZodType<Prisma.ActivityCreateManyInput> =
    z.strictObject({
        id: z.number().int().optional(),
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdById: z.string(),
    });

export const ActivityUpdateManyMutationInputSchema: z.ZodType<Prisma.ActivityUpdateManyMutationInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const ActivityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> =
    z.strictObject({
        id: z.cuid().optional(),
        name: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
    });

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> =
    z.strictObject({
        id: z.cuid().optional(),
        name: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdById: z.string(),
    });

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdBy: z
            .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
            .optional(),
    });

export const PostUncheckedUpdateInputSchema: z.ZodType<Prisma.PostUncheckedUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> =
    z.strictObject({
        id: z.cuid().optional(),
        name: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdById: z.string(),
    });

export const PostUpdateManyMutationInputSchema: z.ZodType<Prisma.PostUpdateManyMutationInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const PostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartCreateNestedManyWithoutUserInputSchema)
            .optional(),
    });

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutUserInputSchema,
            )
            .optional(),
    });

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartUpdateManyWithoutUserNestedInputSchema)
            .optional(),
    });

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutUserNestedInputSchema,
            )
            .optional(),
    });

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartCreateInputSchema: z.ZodType<Prisma.UserActivityStartCreateInput> =
    z.strictObject({
        user: z.lazy(() => UserCreateNestedOneWithoutStarsInputSchema),
        activity: z.lazy(() => ActivityCreateNestedOneWithoutStarsInputSchema),
    });

export const UserActivityStartUncheckedCreateInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedCreateInput> =
    z.strictObject({
        userID: z.string(),
        activityID: z.number().int(),
    });

export const UserActivityStartUpdateInputSchema: z.ZodType<Prisma.UserActivityStartUpdateInput> =
    z.strictObject({
        user: z
            .lazy(() => UserUpdateOneRequiredWithoutStarsNestedInputSchema)
            .optional(),
        activity: z
            .lazy(() => ActivityUpdateOneRequiredWithoutStarsNestedInputSchema)
            .optional(),
    });

export const UserActivityStartUncheckedUpdateInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateInput> =
    z.strictObject({
        userID: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        activityID: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartCreateManyInputSchema: z.ZodType<Prisma.UserActivityStartCreateManyInput> =
    z.strictObject({
        userID: z.string(),
        activityID: z.number().int(),
    });

export const UserActivityStartUpdateManyMutationInputSchema: z.ZodType<Prisma.UserActivityStartUpdateManyMutationInput> =
    z.strictObject({});

export const UserActivityStartUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateManyInput> =
    z.strictObject({
        userID: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        activityID: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> =
    z.strictObject({
        id: z.string(),
        expiresAt: z.coerce.date(),
        token: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
        user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
    });

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> =
    z.strictObject({
        id: z.string(),
        expiresAt: z.coerce.date(),
        token: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
        userId: z.string(),
    });

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        user: z
            .lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema)
            .optional(),
    });

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> =
    z.strictObject({
        id: z.string(),
        expiresAt: z.coerce.date(),
        token: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
        userId: z.string(),
    });

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> =
    z.strictObject({
        id: z.string(),
        accountId: z.string(),
        providerId: z.string(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        idToken: z.string().optional().nullable(),
        accessTokenExpiresAt: z.coerce.date().optional().nullable(),
        refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
        scope: z.string().optional().nullable(),
        password: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        issuer: z.string().optional().nullable(),
        user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
    });

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> =
    z.strictObject({
        id: z.string(),
        accountId: z.string(),
        providerId: z.string(),
        userId: z.string(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        idToken: z.string().optional().nullable(),
        accessTokenExpiresAt: z.coerce.date().optional().nullable(),
        refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
        scope: z.string().optional().nullable(),
        password: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        issuer: z.string().optional().nullable(),
    });

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        user: z
            .lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema)
            .optional(),
    });

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        userId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> =
    z.strictObject({
        id: z.string(),
        accountId: z.string(),
        providerId: z.string(),
        userId: z.string(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        idToken: z.string().optional().nullable(),
        accessTokenExpiresAt: z.coerce.date().optional().nullable(),
        refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
        scope: z.string().optional().nullable(),
        password: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        issuer: z.string().optional().nullable(),
    });

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        userId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const VerificationCreateInputSchema: z.ZodType<Prisma.VerificationCreateInput> =
    z.strictObject({
        id: z.string(),
        identifier: z.string(),
        value: z.string(),
        expiresAt: z.coerce.date(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const VerificationUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> =
    z.strictObject({
        id: z.string(),
        identifier: z.string(),
        value: z.string(),
        expiresAt: z.coerce.date(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const VerificationUpdateInputSchema: z.ZodType<Prisma.VerificationUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        identifier: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        value: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const VerificationUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        identifier: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        value: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const VerificationCreateManyInputSchema: z.ZodType<Prisma.VerificationCreateManyInput> =
    z.strictObject({
        id: z.string(),
        identifier: z.string(),
        value: z.string(),
        expiresAt: z.coerce.date(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const VerificationUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationUpdateManyMutationInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        identifier: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        value: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const VerificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateManyInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        identifier: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        value: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> =
    z.strictObject({
        equals: z.string().optional(),
        in: z.string().array().optional(),
        notIn: z.string().array().optional(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
            .optional(),
    });

export const EnumActivityTagTypeFilterSchema: z.ZodType<Prisma.EnumActivityTagTypeFilter> =
    z.strictObject({
        equals: z.lazy(() => ActivityTagTypeSchema).optional(),
        in: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        not: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(() => NestedEnumActivityTagTypeFilterSchema),
            ])
            .optional(),
    });

export const ActivityListRelationFilterSchema: z.ZodType<Prisma.ActivityListRelationFilter> =
    z.strictObject({
        every: z.lazy(() => ActivityWhereInputSchema).optional(),
        some: z.lazy(() => ActivityWhereInputSchema).optional(),
        none: z.lazy(() => ActivityWhereInputSchema).optional(),
    });

export const ActivityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ActivityOrderByRelationAggregateInput> =
    z.strictObject({
        _count: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityTagOrderByRelevanceInputSchema: z.ZodType<Prisma.ActivityTagOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => ActivityTagOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ActivityTagOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const ActivityTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityTagCountOrderByAggregateInput> =
    z.strictObject({
        name: z.lazy(() => SortOrderSchema).optional(),
        tagColor: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityTagMaxOrderByAggregateInput> =
    z.strictObject({
        name: z.lazy(() => SortOrderSchema).optional(),
        tagColor: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityTagMinOrderByAggregateInput> =
    z.strictObject({
        name: z.lazy(() => SortOrderSchema).optional(),
        tagColor: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
    });

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
    z.strictObject({
        equals: z.string().optional(),
        in: z.string().array().optional(),
        notIn: z.string().array().optional(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([
                z.string(),
                z.lazy(() => NestedStringWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedStringFilterSchema).optional(),
        _max: z.lazy(() => NestedStringFilterSchema).optional(),
    });

export const EnumActivityTagTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumActivityTagTypeWithAggregatesFilter> =
    z.strictObject({
        equals: z.lazy(() => ActivityTagTypeSchema).optional(),
        in: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        not: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => NestedEnumActivityTagTypeWithAggregatesFilterSchema,
                ),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumActivityTagTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumActivityTagTypeFilterSchema).optional(),
    });

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
});

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
    z.strictObject({
        equals: z.string().optional().nullable(),
        in: z.string().array().optional().nullable(),
        notIn: z.string().array().optional().nullable(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
            .optional()
            .nullable(),
    });

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> =
    z.strictObject({
        equals: z.number().optional().nullable(),
        in: z.number().array().optional().nullable(),
        notIn: z.number().array().optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
            .optional()
            .nullable(),
    });

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> =
    z.strictObject({
        equals: z.coerce.date().optional(),
        in: z.coerce.date().array().optional(),
        notIn: z.coerce.date().array().optional(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
            .optional(),
    });

export const ActivityTagListRelationFilterSchema: z.ZodType<Prisma.ActivityTagListRelationFilter> =
    z.strictObject({
        every: z.lazy(() => ActivityTagWhereInputSchema).optional(),
        some: z.lazy(() => ActivityTagWhereInputSchema).optional(),
        none: z.lazy(() => ActivityTagWhereInputSchema).optional(),
    });

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> =
    z.strictObject({
        is: z.lazy(() => UserWhereInputSchema).optional(),
        isNot: z.lazy(() => UserWhereInputSchema).optional(),
    });

export const UserActivityStartListRelationFilterSchema: z.ZodType<Prisma.UserActivityStartListRelationFilter> =
    z.strictObject({
        every: z.lazy(() => UserActivityStartWhereInputSchema).optional(),
        some: z.lazy(() => UserActivityStartWhereInputSchema).optional(),
        none: z.lazy(() => UserActivityStartWhereInputSchema).optional(),
    });

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> =
    z.strictObject({
        sort: z.lazy(() => SortOrderSchema),
        nulls: z.lazy(() => NullsOrderSchema).optional(),
    });

export const ActivityTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ActivityTagOrderByRelationAggregateInput> =
    z.strictObject({
        _count: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserActivityStartOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserActivityStartOrderByRelationAggregateInput> =
    z.strictObject({
        _count: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityOrderByRelevanceInputSchema: z.ZodType<Prisma.ActivityOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => ActivityOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ActivityOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const ActivityCountOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityCountOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        rules: z.lazy(() => SortOrderSchema).optional(),
        neededItems: z.lazy(() => SortOrderSchema).optional(),
        minDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityAvgOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        minDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityMaxOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        rules: z.lazy(() => SortOrderSchema).optional(),
        neededItems: z.lazy(() => SortOrderSchema).optional(),
        minDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityMinOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityMinOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        rules: z.lazy(() => SortOrderSchema).optional(),
        neededItems: z.lazy(() => SortOrderSchema).optional(),
        minDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivitySumOrderByAggregateInputSchema: z.ZodType<Prisma.ActivitySumOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        minDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        maxDurationMinutes: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
    });

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
    z.strictObject({
        equals: z.number().optional(),
        in: z.number().array().optional(),
        notIn: z.number().array().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([
                z.number(),
                z.lazy(() => NestedIntWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
        _sum: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedIntFilterSchema).optional(),
        _max: z.lazy(() => NestedIntFilterSchema).optional(),
    });

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
    z.strictObject({
        equals: z.string().optional().nullable(),
        in: z.string().array().optional().nullable(),
        notIn: z.string().array().optional().nullable(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([
                z.string(),
                z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
            ])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    });

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> =
    z.strictObject({
        equals: z.number().optional().nullable(),
        in: z.number().array().optional().nullable(),
        notIn: z.number().array().optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([
                z.number(),
                z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
            ])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
        _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    });

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
    z.strictObject({
        equals: z.coerce.date().optional(),
        in: z.coerce.date().array().optional(),
        notIn: z.coerce.date().array().optional(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([
                z.coerce.date(),
                z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
        _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    });

export const PostOrderByRelevanceInputSchema: z.ZodType<Prisma.PostOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => PostOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PostOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const PostCountOrderByAggregateInputSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
    });

export const PostMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
    });

export const PostMinOrderByAggregateInputSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
    });

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.strictObject({
    equals: z.boolean().optional(),
    not: z
        .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
        .optional(),
});

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> =
    z.strictObject({
        every: z.lazy(() => SessionWhereInputSchema).optional(),
        some: z.lazy(() => SessionWhereInputSchema).optional(),
        none: z.lazy(() => SessionWhereInputSchema).optional(),
    });

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> =
    z.strictObject({
        every: z.lazy(() => AccountWhereInputSchema).optional(),
        some: z.lazy(() => AccountWhereInputSchema).optional(),
        none: z.lazy(() => AccountWhereInputSchema).optional(),
    });

export const PostListRelationFilterSchema: z.ZodType<Prisma.PostListRelationFilter> =
    z.strictObject({
        every: z.lazy(() => PostWhereInputSchema).optional(),
        some: z.lazy(() => PostWhereInputSchema).optional(),
        none: z.lazy(() => PostWhereInputSchema).optional(),
    });

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> =
    z.strictObject({
        _count: z.lazy(() => SortOrderSchema).optional(),
    });

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> =
    z.strictObject({
        _count: z.lazy(() => SortOrderSchema).optional(),
    });

export const PostOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> =
    z.strictObject({
        _count: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserOrderByRelevanceInputSchema: z.ZodType<Prisma.UserOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => UserOrderByRelevanceFieldEnumSchema),
            z.lazy(() => UserOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.lazy(() => SortOrderSchema).optional(),
        image: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.lazy(() => SortOrderSchema).optional(),
        image: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        emailVerified: z.lazy(() => SortOrderSchema).optional(),
        image: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
    });

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
    z.strictObject({
        equals: z.boolean().optional(),
        not: z
            .union([
                z.boolean(),
                z.lazy(() => NestedBoolWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedBoolFilterSchema).optional(),
        _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    });

export const ActivityScalarRelationFilterSchema: z.ZodType<Prisma.ActivityScalarRelationFilter> =
    z.strictObject({
        is: z.lazy(() => ActivityWhereInputSchema).optional(),
        isNot: z.lazy(() => ActivityWhereInputSchema).optional(),
    });

export const UserActivityStartOrderByRelevanceInputSchema: z.ZodType<Prisma.UserActivityStartOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => UserActivityStartOrderByRelevanceFieldEnumSchema),
            z
                .lazy(() => UserActivityStartOrderByRelevanceFieldEnumSchema)
                .array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const UserActivityStartUserIDActivityIDCompoundUniqueInputSchema: z.ZodType<Prisma.UserActivityStartUserIDActivityIDCompoundUniqueInput> =
    z.strictObject({
        userID: z.string(),
        activityID: z.number(),
    });

export const UserActivityStartCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserActivityStartCountOrderByAggregateInput> =
    z.strictObject({
        userID: z.lazy(() => SortOrderSchema).optional(),
        activityID: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserActivityStartAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserActivityStartAvgOrderByAggregateInput> =
    z.strictObject({
        activityID: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserActivityStartMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserActivityStartMaxOrderByAggregateInput> =
    z.strictObject({
        userID: z.lazy(() => SortOrderSchema).optional(),
        activityID: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserActivityStartMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserActivityStartMinOrderByAggregateInput> =
    z.strictObject({
        userID: z.lazy(() => SortOrderSchema).optional(),
        activityID: z.lazy(() => SortOrderSchema).optional(),
    });

export const UserActivityStartSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserActivityStartSumOrderByAggregateInput> =
    z.strictObject({
        activityID: z.lazy(() => SortOrderSchema).optional(),
    });

export const SessionOrderByRelevanceInputSchema: z.ZodType<Prisma.SessionOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => SessionOrderByRelevanceFieldEnumSchema),
            z.lazy(() => SessionOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        ipAddress: z.lazy(() => SortOrderSchema).optional(),
        userAgent: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
    });

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        ipAddress: z.lazy(() => SortOrderSchema).optional(),
        userAgent: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
    });

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        ipAddress: z.lazy(() => SortOrderSchema).optional(),
        userAgent: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
    });

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
    z.strictObject({
        equals: z.coerce.date().optional().nullable(),
        in: z.coerce.date().array().optional().nullable(),
        notIn: z.coerce.date().array().optional().nullable(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([
                z.coerce.date(),
                z.lazy(() => NestedDateTimeNullableFilterSchema),
            ])
            .optional()
            .nullable(),
    });

export const AccountOrderByRelevanceInputSchema: z.ZodType<Prisma.AccountOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => AccountOrderByRelevanceFieldEnumSchema),
            z.lazy(() => AccountOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        accountId: z.lazy(() => SortOrderSchema).optional(),
        providerId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z.lazy(() => SortOrderSchema).optional(),
        refreshToken: z.lazy(() => SortOrderSchema).optional(),
        idToken: z.lazy(() => SortOrderSchema).optional(),
        accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        scope: z.lazy(() => SortOrderSchema).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        issuer: z.lazy(() => SortOrderSchema).optional(),
    });

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        accountId: z.lazy(() => SortOrderSchema).optional(),
        providerId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z.lazy(() => SortOrderSchema).optional(),
        refreshToken: z.lazy(() => SortOrderSchema).optional(),
        idToken: z.lazy(() => SortOrderSchema).optional(),
        accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        scope: z.lazy(() => SortOrderSchema).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        issuer: z.lazy(() => SortOrderSchema).optional(),
    });

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        accountId: z.lazy(() => SortOrderSchema).optional(),
        providerId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z.lazy(() => SortOrderSchema).optional(),
        refreshToken: z.lazy(() => SortOrderSchema).optional(),
        idToken: z.lazy(() => SortOrderSchema).optional(),
        accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        scope: z.lazy(() => SortOrderSchema).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        issuer: z.lazy(() => SortOrderSchema).optional(),
    });

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
    z.strictObject({
        equals: z.coerce.date().optional().nullable(),
        in: z.coerce.date().array().optional().nullable(),
        notIn: z.coerce.date().array().optional().nullable(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([
                z.coerce.date(),
                z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
            ])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    });

export const VerificationOrderByRelevanceInputSchema: z.ZodType<Prisma.VerificationOrderByRelevanceInput> =
    z.strictObject({
        fields: z.union([
            z.lazy(() => VerificationOrderByRelevanceFieldEnumSchema),
            z.lazy(() => VerificationOrderByRelevanceFieldEnumSchema).array(),
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string(),
    });

export const VerificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        identifier: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
    });

export const VerificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        identifier: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
    });

export const VerificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMinOrderByAggregateInput> =
    z.strictObject({
        id: z.lazy(() => SortOrderSchema).optional(),
        identifier: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
    });

export const ActivityCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutTagsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutTagsInputSchema),
                z.lazy(() => ActivityCreateWithoutTagsInputSchema).array(),
                z.lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutTagsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutTagsInputSchema),
                z.lazy(() => ActivityCreateWithoutTagsInputSchema).array(),
                z.lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.string().optional(),
    });

export const EnumActivityTagTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumActivityTagTypeFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.lazy(() => ActivityTagTypeSchema).optional(),
    });

export const ActivityUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.ActivityUpdateManyWithoutTagsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutTagsInputSchema),
                z.lazy(() => ActivityCreateWithoutTagsInputSchema).array(),
                z.lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => ActivityUpsertWithWhereUniqueWithoutTagsInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpsertWithWhereUniqueWithoutTagsInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        set: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => ActivityUpdateWithWhereUniqueWithoutTagsInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpdateWithWhereUniqueWithoutTagsInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ActivityUpdateManyWithWhereWithoutTagsInputSchema),
                z
                    .lazy(
                        () => ActivityUpdateManyWithWhereWithoutTagsInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ActivityScalarWhereInputSchema),
                z.lazy(() => ActivityScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutTagsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutTagsInputSchema),
                z.lazy(() => ActivityCreateWithoutTagsInputSchema).array(),
                z.lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema),
                z
                    .lazy(() => ActivityCreateOrConnectWithoutTagsInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => ActivityUpsertWithWhereUniqueWithoutTagsInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpsertWithWhereUniqueWithoutTagsInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        set: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => ActivityUpdateWithWhereUniqueWithoutTagsInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpdateWithWhereUniqueWithoutTagsInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ActivityUpdateManyWithWhereWithoutTagsInputSchema),
                z
                    .lazy(
                        () => ActivityUpdateManyWithWhereWithoutTagsInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ActivityScalarWhereInputSchema),
                z.lazy(() => ActivityScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityTagCreateNestedManyWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagCreateNestedManyWithoutActivitiesInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityTagCreateWithoutActivitiesInputSchema),
                z
                    .lazy(() => ActivityTagCreateWithoutActivitiesInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const UserCreateNestedOneWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedActivitiesInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutCreatedActivitiesInputSchema),
                z.lazy(
                    () =>
                        UserUncheckedCreateWithoutCreatedActivitiesInputSchema,
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutCreatedActivitiesInputSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    });

export const UserActivityStartCreateNestedManyWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartCreateNestedManyWithoutActivityInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutActivityInputSchema),
                z
                    .lazy(
                        () => UserActivityStartCreateWithoutActivityInputSchema,
                    )
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyActivityInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityTagUncheckedCreateNestedManyWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUncheckedCreateNestedManyWithoutActivitiesInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityTagCreateWithoutActivitiesInputSchema),
                z
                    .lazy(() => ActivityTagCreateWithoutActivitiesInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const UserActivityStartUncheckedCreateNestedManyWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedCreateNestedManyWithoutActivityInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutActivityInputSchema),
                z
                    .lazy(
                        () => UserActivityStartCreateWithoutActivityInputSchema,
                    )
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyActivityInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.string().optional().nullable(),
    });

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.number().optional().nullable(),
        increment: z.number().optional(),
        decrement: z.number().optional(),
        multiply: z.number().optional(),
        divide: z.number().optional(),
    });

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.number().optional(),
        increment: z.number().optional(),
        decrement: z.number().optional(),
        multiply: z.number().optional(),
        divide: z.number().optional(),
    });

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.coerce.date().optional(),
    });

export const ActivityTagUpdateManyWithoutActivitiesNestedInputSchema: z.ZodType<Prisma.ActivityTagUpdateManyWithoutActivitiesNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityTagCreateWithoutActivitiesInputSchema),
                z
                    .lazy(() => ActivityTagCreateWithoutActivitiesInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagUpsertWithWhereUniqueWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUpsertWithWhereUniqueWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        set: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagUpdateWithWhereUniqueWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUpdateWithWhereUniqueWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagUpdateManyWithWhereWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUpdateManyWithWhereWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ActivityTagScalarWhereInputSchema),
                z.lazy(() => ActivityTagScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const UserUpdateOneRequiredWithoutCreatedActivitiesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutCreatedActivitiesInputSchema),
                z.lazy(
                    () =>
                        UserUncheckedCreateWithoutCreatedActivitiesInputSchema,
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutCreatedActivitiesInputSchema)
            .optional(),
        upsert: z
            .lazy(() => UserUpsertWithoutCreatedActivitiesInputSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        UserUpdateToOneWithWhereWithoutCreatedActivitiesInputSchema,
                ),
                z.lazy(() => UserUpdateWithoutCreatedActivitiesInputSchema),
                z.lazy(
                    () =>
                        UserUncheckedUpdateWithoutCreatedActivitiesInputSchema,
                ),
            ])
            .optional(),
    });

export const UserActivityStartUpdateManyWithoutActivityNestedInputSchema: z.ZodType<Prisma.UserActivityStartUpdateManyWithoutActivityNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutActivityInputSchema),
                z
                    .lazy(
                        () => UserActivityStartCreateWithoutActivityInputSchema,
                    )
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpsertWithWhereUniqueWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpsertWithWhereUniqueWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyActivityInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateWithWhereUniqueWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateWithWhereUniqueWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateManyWithWhereWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateManyWithWhereWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => UserActivityStartScalarWhereInputSchema),
                z.lazy(() => UserActivityStartScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityTagUncheckedUpdateManyWithoutActivitiesNestedInputSchema: z.ZodType<Prisma.ActivityTagUncheckedUpdateManyWithoutActivitiesNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityTagCreateWithoutActivitiesInputSchema),
                z
                    .lazy(() => ActivityTagCreateWithoutActivitiesInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagCreateOrConnectWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagUpsertWithWhereUniqueWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUpsertWithWhereUniqueWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        set: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityTagWhereUniqueInputSchema),
                z.lazy(() => ActivityTagWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagUpdateWithWhereUniqueWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUpdateWithWhereUniqueWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        ActivityTagUpdateManyWithWhereWithoutActivitiesInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityTagUpdateManyWithWhereWithoutActivitiesInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ActivityTagScalarWhereInputSchema),
                z.lazy(() => ActivityTagScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const UserActivityStartUncheckedUpdateManyWithoutActivityNestedInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateManyWithoutActivityNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutActivityInputSchema),
                z
                    .lazy(
                        () => UserActivityStartCreateWithoutActivityInputSchema,
                    )
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpsertWithWhereUniqueWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpsertWithWhereUniqueWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyActivityInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateWithWhereUniqueWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateWithWhereUniqueWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateManyWithWhereWithoutActivityInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateManyWithWhereWithoutActivityInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => UserActivityStartScalarWhereInputSchema),
                z.lazy(() => UserActivityStartScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const UserCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutPostsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutPostsInputSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    });

export const UserUpdateOneRequiredWithoutPostsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutPostsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutPostsInputSchema)
            .optional(),
        upsert: z.lazy(() => UserUpsertWithoutPostsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutPostsInputSchema),
                z.lazy(() => UserUpdateWithoutPostsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
            ])
            .optional(),
    });

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => SessionCreateWithoutUserInputSchema),
                z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
                z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => SessionUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => SessionCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => AccountCreateWithoutUserInputSchema),
                z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
                z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => AccountUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => AccountCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const PostCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutCreatedByInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => PostCreateWithoutCreatedByInputSchema),
                z.lazy(() => PostCreateWithoutCreatedByInputSchema).array(),
                z.lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => PostCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutCreatedByInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema),
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema).array(),
                z.lazy(
                    () => ActivityUncheckedCreateWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUncheckedCreateWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () => ActivityCreateOrConnectWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityCreateOrConnectWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => ActivityCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const UserActivityStartCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartCreateNestedManyWithoutUserInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutUserInputSchema),
                z
                    .lazy(() => UserActivityStartCreateWithoutUserInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyUserInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => SessionCreateWithoutUserInputSchema),
                z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
                z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => SessionUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => SessionCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => AccountCreateWithoutUserInputSchema),
                z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
                z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => AccountUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => AccountCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const PostUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutCreatedByInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => PostCreateWithoutCreatedByInputSchema),
                z.lazy(() => PostCreateWithoutCreatedByInputSchema).array(),
                z.lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => PostCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutCreatedByInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema),
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema).array(),
                z.lazy(
                    () => ActivityUncheckedCreateWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUncheckedCreateWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () => ActivityCreateOrConnectWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityCreateOrConnectWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => ActivityCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const UserActivityStartUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedCreateNestedManyWithoutUserInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutUserInputSchema),
                z
                    .lazy(() => UserActivityStartCreateWithoutUserInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyUserInputEnvelopeSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
    });

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.boolean().optional(),
    });

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => SessionCreateWithoutUserInputSchema),
                z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
                z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => SessionUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => SessionCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => SessionUpsertWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            SessionUpsertWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => SessionUpdateWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            SessionUpdateWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
                z
                    .lazy(
                        () => SessionUpdateManyWithWhereWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => SessionScalarWhereInputSchema),
                z.lazy(() => SessionScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => AccountCreateWithoutUserInputSchema),
                z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
                z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => AccountUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => AccountCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => AccountUpsertWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            AccountUpsertWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => AccountUpdateWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            AccountUpdateWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
                z
                    .lazy(
                        () => AccountUpdateManyWithWhereWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => AccountScalarWhereInputSchema),
                z.lazy(() => AccountScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const PostUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.PostUpdateManyWithoutCreatedByNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => PostCreateWithoutCreatedByInputSchema),
                z.lazy(() => PostCreateWithoutCreatedByInputSchema).array(),
                z.lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => PostUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            PostUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => PostCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => PostUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            PostUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () => PostUpdateManyWithWhereWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            PostUpdateManyWithWhereWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => PostScalarWhereInputSchema),
                z.lazy(() => PostScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.ActivityUpdateManyWithoutCreatedByNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema),
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema).array(),
                z.lazy(
                    () => ActivityUncheckedCreateWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUncheckedCreateWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () => ActivityCreateOrConnectWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityCreateOrConnectWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        ActivityUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => ActivityCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        ActivityUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        ActivityUpdateManyWithWhereWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpdateManyWithWhereWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ActivityScalarWhereInputSchema),
                z.lazy(() => ActivityScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const UserActivityStartUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserActivityStartUpdateManyWithoutUserNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutUserInputSchema),
                z
                    .lazy(() => UserActivityStartCreateWithoutUserInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpsertWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpsertWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyUserInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateManyWithWhereWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateManyWithWhereWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => UserActivityStartScalarWhereInputSchema),
                z.lazy(() => UserActivityStartScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => SessionCreateWithoutUserInputSchema),
                z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
                z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => SessionUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => SessionCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => SessionUpsertWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            SessionUpsertWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => SessionWhereUniqueInputSchema),
                z.lazy(() => SessionWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => SessionUpdateWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            SessionUpdateWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
                z
                    .lazy(
                        () => SessionUpdateManyWithWhereWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => SessionScalarWhereInputSchema),
                z.lazy(() => SessionScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => AccountCreateWithoutUserInputSchema),
                z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
                z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
                z
                    .lazy(() => AccountUncheckedCreateWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
                z
                    .lazy(() => AccountCreateOrConnectWithoutUserInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => AccountUpsertWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            AccountUpsertWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => AccountWhereUniqueInputSchema),
                z.lazy(() => AccountWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => AccountUpdateWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            AccountUpdateWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
                z
                    .lazy(
                        () => AccountUpdateManyWithWhereWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => AccountScalarWhereInputSchema),
                z.lazy(() => AccountScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const PostUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCreatedByNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => PostCreateWithoutCreatedByInputSchema),
                z.lazy(() => PostCreateWithoutCreatedByInputSchema).array(),
                z.lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema),
                z
                    .lazy(() => PostCreateOrConnectWithoutCreatedByInputSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () => PostUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            PostUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => PostCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => PostWhereUniqueInputSchema),
                z.lazy(() => PostWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () => PostUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            PostUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () => PostUpdateManyWithWhereWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            PostUpdateManyWithWhereWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => PostScalarWhereInputSchema),
                z.lazy(() => PostScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const ActivityUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutCreatedByNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema),
                z.lazy(() => ActivityCreateWithoutCreatedByInputSchema).array(),
                z.lazy(
                    () => ActivityUncheckedCreateWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUncheckedCreateWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () => ActivityCreateOrConnectWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityCreateOrConnectWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        ActivityUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpsertWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => ActivityCreateManyCreatedByInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ActivityWhereUniqueInputSchema),
                z.lazy(() => ActivityWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        ActivityUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpdateWithWhereUniqueWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        ActivityUpdateManyWithWhereWithoutCreatedByInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            ActivityUpdateManyWithWhereWithoutCreatedByInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ActivityScalarWhereInputSchema),
                z.lazy(() => ActivityScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const UserActivityStartUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateManyWithoutUserNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserActivityStartCreateWithoutUserInputSchema),
                z
                    .lazy(() => UserActivityStartCreateWithoutUserInputSchema)
                    .array(),
                z.lazy(
                    () =>
                        UserActivityStartUncheckedCreateWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUncheckedCreateWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartCreateOrConnectWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartCreateOrConnectWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpsertWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpsertWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => UserActivityStartCreateManyUserInputEnvelopeSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => UserActivityStartWhereUniqueInputSchema),
                z.lazy(() => UserActivityStartWhereUniqueInputSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateWithWhereUniqueWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateWithWhereUniqueWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        UserActivityStartUpdateManyWithWhereWithoutUserInputSchema,
                ),
                z
                    .lazy(
                        () =>
                            UserActivityStartUpdateManyWithWhereWithoutUserInputSchema,
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => UserActivityStartScalarWhereInputSchema),
                z.lazy(() => UserActivityStartScalarWhereInputSchema).array(),
            ])
            .optional(),
    });

export const UserCreateNestedOneWithoutStarsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStarsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutStarsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutStarsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutStarsInputSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    });

export const ActivityCreateNestedOneWithoutStarsInputSchema: z.ZodType<Prisma.ActivityCreateNestedOneWithoutStarsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutStarsInputSchema),
                z.lazy(() => ActivityUncheckedCreateWithoutStarsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => ActivityCreateOrConnectWithoutStarsInputSchema)
            .optional(),
        connect: z.lazy(() => ActivityWhereUniqueInputSchema).optional(),
    });

export const UserUpdateOneRequiredWithoutStarsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStarsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutStarsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutStarsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutStarsInputSchema)
            .optional(),
        upsert: z.lazy(() => UserUpsertWithoutStarsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutStarsInputSchema),
                z.lazy(() => UserUpdateWithoutStarsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutStarsInputSchema),
            ])
            .optional(),
    });

export const ActivityUpdateOneRequiredWithoutStarsNestedInputSchema: z.ZodType<Prisma.ActivityUpdateOneRequiredWithoutStarsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => ActivityCreateWithoutStarsInputSchema),
                z.lazy(() => ActivityUncheckedCreateWithoutStarsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => ActivityCreateOrConnectWithoutStarsInputSchema)
            .optional(),
        upsert: z.lazy(() => ActivityUpsertWithoutStarsInputSchema).optional(),
        connect: z.lazy(() => ActivityWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(
                    () => ActivityUpdateToOneWithWhereWithoutStarsInputSchema,
                ),
                z.lazy(() => ActivityUpdateWithoutStarsInputSchema),
                z.lazy(() => ActivityUncheckedUpdateWithoutStarsInputSchema),
            ])
            .optional(),
    });

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutSessionsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    });

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutSessionsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
            .optional(),
        upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(
                    () => UserUpdateToOneWithWhereWithoutSessionsInputSchema,
                ),
                z.lazy(() => UserUpdateWithoutSessionsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
            ])
            .optional(),
    });

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutAccountsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    });

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
    z.strictObject({
        set: z.coerce.date().optional().nullable(),
    });

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> =
    z.strictObject({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutAccountsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
            .optional(),
        upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(
                    () => UserUpdateToOneWithWhereWithoutAccountsInputSchema,
                ),
                z.lazy(() => UserUpdateWithoutAccountsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
            ])
            .optional(),
    });

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> =
    z.strictObject({
        equals: z.string().optional(),
        in: z.string().array().optional(),
        notIn: z.string().array().optional(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
            .optional(),
    });

export const NestedEnumActivityTagTypeFilterSchema: z.ZodType<Prisma.NestedEnumActivityTagTypeFilter> =
    z.strictObject({
        equals: z.lazy(() => ActivityTagTypeSchema).optional(),
        in: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        not: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(() => NestedEnumActivityTagTypeFilterSchema),
            ])
            .optional(),
    });

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
    z.strictObject({
        equals: z.string().optional(),
        in: z.string().array().optional(),
        notIn: z.string().array().optional(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([
                z.string(),
                z.lazy(() => NestedStringWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedStringFilterSchema).optional(),
        _max: z.lazy(() => NestedStringFilterSchema).optional(),
    });

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> =
    z.strictObject({
        equals: z.number().optional(),
        in: z.number().array().optional(),
        notIn: z.number().array().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedIntFilterSchema)])
            .optional(),
    });

export const NestedEnumActivityTagTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumActivityTagTypeWithAggregatesFilter> =
    z.strictObject({
        equals: z.lazy(() => ActivityTagTypeSchema).optional(),
        in: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ActivityTagTypeSchema)
            .array()
            .optional(),
        not: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => NestedEnumActivityTagTypeWithAggregatesFilterSchema,
                ),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumActivityTagTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumActivityTagTypeFilterSchema).optional(),
    });

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
    z.strictObject({
        equals: z.string().optional().nullable(),
        in: z.string().array().optional().nullable(),
        notIn: z.string().array().optional().nullable(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
            .optional()
            .nullable(),
    });

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
    z.strictObject({
        equals: z.number().optional().nullable(),
        in: z.number().array().optional().nullable(),
        notIn: z.number().array().optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
            .optional()
            .nullable(),
    });

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
    z.strictObject({
        equals: z.coerce.date().optional(),
        in: z.coerce.date().array().optional(),
        notIn: z.coerce.date().array().optional(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
            .optional(),
    });

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
    z.strictObject({
        equals: z.number().optional(),
        in: z.number().array().optional(),
        notIn: z.number().array().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([
                z.number(),
                z.lazy(() => NestedIntWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
        _sum: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedIntFilterSchema).optional(),
        _max: z.lazy(() => NestedIntFilterSchema).optional(),
    });

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> =
    z.strictObject({
        equals: z.number().optional(),
        in: z.number().array().optional(),
        notIn: z.number().array().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
            .optional(),
    });

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
    z.strictObject({
        equals: z.string().optional().nullable(),
        in: z.string().array().optional().nullable(),
        notIn: z.string().array().optional().nullable(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        search: z.string().optional(),
        not: z
            .union([
                z.string(),
                z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
            ])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    });

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
    z.strictObject({
        equals: z.number().optional().nullable(),
        in: z.number().array().optional().nullable(),
        notIn: z.number().array().optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([
                z.number(),
                z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
            ])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
        _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    });

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> =
    z.strictObject({
        equals: z.number().optional().nullable(),
        in: z.number().array().optional().nullable(),
        notIn: z.number().array().optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
            .optional()
            .nullable(),
    });

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
    z.strictObject({
        equals: z.coerce.date().optional(),
        in: z.coerce.date().array().optional(),
        notIn: z.coerce.date().array().optional(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([
                z.coerce.date(),
                z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
        _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    });

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> =
    z.strictObject({
        equals: z.boolean().optional(),
        not: z
            .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
            .optional(),
    });

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
    z.strictObject({
        equals: z.boolean().optional(),
        not: z
            .union([
                z.boolean(),
                z.lazy(() => NestedBoolWithAggregatesFilterSchema),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedBoolFilterSchema).optional(),
        _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    });

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
    z.strictObject({
        equals: z.coerce.date().optional().nullable(),
        in: z.coerce.date().array().optional().nullable(),
        notIn: z.coerce.date().array().optional().nullable(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([
                z.coerce.date(),
                z.lazy(() => NestedDateTimeNullableFilterSchema),
            ])
            .optional()
            .nullable(),
    });

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
    z.strictObject({
        equals: z.coerce.date().optional().nullable(),
        in: z.coerce.date().array().optional().nullable(),
        notIn: z.coerce.date().array().optional().nullable(),
        lt: z.coerce.date().optional(),
        lte: z.coerce.date().optional(),
        gt: z.coerce.date().optional(),
        gte: z.coerce.date().optional(),
        not: z
            .union([
                z.coerce.date(),
                z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
            ])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    });

export const ActivityCreateWithoutTagsInputSchema: z.ZodType<Prisma.ActivityCreateWithoutTagsInput> =
    z.strictObject({
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.lazy(
            () => UserCreateNestedOneWithoutCreatedActivitiesInputSchema,
        ),
        stars: z
            .lazy(
                () =>
                    UserActivityStartCreateNestedManyWithoutActivityInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateWithoutTagsInput> =
    z.strictObject({
        id: z.number().int().optional(),
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdById: z.string(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutActivityInputSchema,
            )
            .optional(),
    });

export const ActivityCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutTagsInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ActivityCreateWithoutTagsInputSchema),
            z.lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema),
        ]),
    });

export const ActivityUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutTagsInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => ActivityUpdateWithoutTagsInputSchema),
            z.lazy(() => ActivityUncheckedUpdateWithoutTagsInputSchema),
        ]),
        create: z.union([
            z.lazy(() => ActivityCreateWithoutTagsInputSchema),
            z.lazy(() => ActivityUncheckedCreateWithoutTagsInputSchema),
        ]),
    });

export const ActivityUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutTagsInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => ActivityUpdateWithoutTagsInputSchema),
            z.lazy(() => ActivityUncheckedUpdateWithoutTagsInputSchema),
        ]),
    });

export const ActivityUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutTagsInput> =
    z.strictObject({
        where: z.lazy(() => ActivityScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => ActivityUpdateManyMutationInputSchema),
            z.lazy(() => ActivityUncheckedUpdateManyWithoutTagsInputSchema),
        ]),
    });

export const ActivityScalarWhereInputSchema: z.ZodType<Prisma.ActivityScalarWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => ActivityScalarWhereInputSchema),
                z.lazy(() => ActivityScalarWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ActivityScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ActivityScalarWhereInputSchema),
                z.lazy(() => ActivityScalarWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        description: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        rules: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        neededItems: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([z.lazy(() => IntFilterSchema), z.number()])
            .optional(),
        views: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        createdById: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
    });

export const ActivityTagCreateWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagCreateWithoutActivitiesInput> =
    z.strictObject({
        name: z.string(),
        tagColor: z.string(),
        type: z.lazy(() => ActivityTagTypeSchema),
    });

export const ActivityTagUncheckedCreateWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUncheckedCreateWithoutActivitiesInput> =
    z.strictObject({
        name: z.string(),
        tagColor: z.string(),
        type: z.lazy(() => ActivityTagTypeSchema),
    });

export const ActivityTagCreateOrConnectWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagCreateOrConnectWithoutActivitiesInput> =
    z.strictObject({
        where: z.lazy(() => ActivityTagWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ActivityTagCreateWithoutActivitiesInputSchema),
            z.lazy(
                () => ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
            ),
        ]),
    });

export const UserCreateWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserCreateWithoutCreatedActivitiesInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartCreateNestedManyWithoutUserInputSchema)
            .optional(),
    });

export const UserUncheckedCreateWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCreatedActivitiesInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutUserInputSchema,
            )
            .optional(),
    });

export const UserCreateOrConnectWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedActivitiesInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutCreatedActivitiesInputSchema),
            z.lazy(
                () => UserUncheckedCreateWithoutCreatedActivitiesInputSchema,
            ),
        ]),
    });

export const UserActivityStartCreateWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartCreateWithoutActivityInput> =
    z.strictObject({
        user: z.lazy(() => UserCreateNestedOneWithoutStarsInputSchema),
    });

export const UserActivityStartUncheckedCreateWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedCreateWithoutActivityInput> =
    z.strictObject({
        userID: z.string(),
    });

export const UserActivityStartCreateOrConnectWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartCreateOrConnectWithoutActivityInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserActivityStartCreateWithoutActivityInputSchema),
            z.lazy(
                () =>
                    UserActivityStartUncheckedCreateWithoutActivityInputSchema,
            ),
        ]),
    });

export const UserActivityStartCreateManyActivityInputEnvelopeSchema: z.ZodType<Prisma.UserActivityStartCreateManyActivityInputEnvelope> =
    z.strictObject({
        data: z.union([
            z.lazy(() => UserActivityStartCreateManyActivityInputSchema),
            z
                .lazy(() => UserActivityStartCreateManyActivityInputSchema)
                .array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    });

export const ActivityTagUpsertWithWhereUniqueWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUpsertWithWhereUniqueWithoutActivitiesInput> =
    z.strictObject({
        where: z.lazy(() => ActivityTagWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => ActivityTagUpdateWithoutActivitiesInputSchema),
            z.lazy(
                () => ActivityTagUncheckedUpdateWithoutActivitiesInputSchema,
            ),
        ]),
        create: z.union([
            z.lazy(() => ActivityTagCreateWithoutActivitiesInputSchema),
            z.lazy(
                () => ActivityTagUncheckedCreateWithoutActivitiesInputSchema,
            ),
        ]),
    });

export const ActivityTagUpdateWithWhereUniqueWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUpdateWithWhereUniqueWithoutActivitiesInput> =
    z.strictObject({
        where: z.lazy(() => ActivityTagWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => ActivityTagUpdateWithoutActivitiesInputSchema),
            z.lazy(
                () => ActivityTagUncheckedUpdateWithoutActivitiesInputSchema,
            ),
        ]),
    });

export const ActivityTagUpdateManyWithWhereWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUpdateManyWithWhereWithoutActivitiesInput> =
    z.strictObject({
        where: z.lazy(() => ActivityTagScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => ActivityTagUpdateManyMutationInputSchema),
            z.lazy(
                () =>
                    ActivityTagUncheckedUpdateManyWithoutActivitiesInputSchema,
            ),
        ]),
    });

export const ActivityTagScalarWhereInputSchema: z.ZodType<Prisma.ActivityTagScalarWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => ActivityTagScalarWhereInputSchema),
                z.lazy(() => ActivityTagScalarWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ActivityTagScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ActivityTagScalarWhereInputSchema),
                z.lazy(() => ActivityTagScalarWhereInputSchema).array(),
            ])
            .optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        tagColor: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        type: z
            .union([
                z.lazy(() => EnumActivityTagTypeFilterSchema),
                z.lazy(() => ActivityTagTypeSchema),
            ])
            .optional(),
    });

export const UserUpsertWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedActivitiesInput> =
    z.strictObject({
        update: z.union([
            z.lazy(() => UserUpdateWithoutCreatedActivitiesInputSchema),
            z.lazy(
                () => UserUncheckedUpdateWithoutCreatedActivitiesInputSchema,
            ),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutCreatedActivitiesInputSchema),
            z.lazy(
                () => UserUncheckedCreateWithoutCreatedActivitiesInputSchema,
            ),
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional(),
    });

export const UserUpdateToOneWithWhereWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedActivitiesInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutCreatedActivitiesInputSchema),
            z.lazy(
                () => UserUncheckedUpdateWithoutCreatedActivitiesInputSchema,
            ),
        ]),
    });

export const UserUpdateWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserUpdateWithoutCreatedActivitiesInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartUpdateManyWithoutUserNestedInputSchema)
            .optional(),
    });

export const UserUncheckedUpdateWithoutCreatedActivitiesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCreatedActivitiesInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutUserNestedInputSchema,
            )
            .optional(),
    });

export const UserActivityStartUpsertWithWhereUniqueWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUpsertWithWhereUniqueWithoutActivityInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => UserActivityStartUpdateWithoutActivityInputSchema),
            z.lazy(
                () =>
                    UserActivityStartUncheckedUpdateWithoutActivityInputSchema,
            ),
        ]),
        create: z.union([
            z.lazy(() => UserActivityStartCreateWithoutActivityInputSchema),
            z.lazy(
                () =>
                    UserActivityStartUncheckedCreateWithoutActivityInputSchema,
            ),
        ]),
    });

export const UserActivityStartUpdateWithWhereUniqueWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUpdateWithWhereUniqueWithoutActivityInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => UserActivityStartUpdateWithoutActivityInputSchema),
            z.lazy(
                () =>
                    UserActivityStartUncheckedUpdateWithoutActivityInputSchema,
            ),
        ]),
    });

export const UserActivityStartUpdateManyWithWhereWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUpdateManyWithWhereWithoutActivityInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => UserActivityStartUpdateManyMutationInputSchema),
            z.lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutActivityInputSchema,
            ),
        ]),
    });

export const UserActivityStartScalarWhereInputSchema: z.ZodType<Prisma.UserActivityStartScalarWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => UserActivityStartScalarWhereInputSchema),
                z.lazy(() => UserActivityStartScalarWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserActivityStartScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => UserActivityStartScalarWhereInputSchema),
                z.lazy(() => UserActivityStartScalarWhereInputSchema).array(),
            ])
            .optional(),
        userID: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        activityID: z
            .union([z.lazy(() => IntFilterSchema), z.number()])
            .optional(),
    });

export const UserCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartCreateNestedManyWithoutUserInputSchema)
            .optional(),
    });

export const UserUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutUserInputSchema,
            )
            .optional(),
    });

export const UserCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutPostsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
        ]),
    });

export const UserUpsertWithoutPostsInputSchema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> =
    z.strictObject({
        update: z.union([
            z.lazy(() => UserUpdateWithoutPostsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutPostsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional(),
    });

export const UserUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutPostsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
        ]),
    });

export const UserUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateWithoutPostsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartUpdateManyWithoutUserNestedInputSchema)
            .optional(),
    });

export const UserUncheckedUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutUserNestedInputSchema,
            )
            .optional(),
    });

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> =
    z.strictObject({
        id: z.string(),
        expiresAt: z.coerce.date(),
        token: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
    });

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> =
    z.strictObject({
        id: z.string(),
        expiresAt: z.coerce.date(),
        token: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
    });

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => SessionWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => SessionCreateWithoutUserInputSchema),
            z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
        ]),
    });

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> =
    z.strictObject({
        data: z.union([
            z.lazy(() => SessionCreateManyUserInputSchema),
            z.lazy(() => SessionCreateManyUserInputSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    });

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> =
    z.strictObject({
        id: z.string(),
        accountId: z.string(),
        providerId: z.string(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        idToken: z.string().optional().nullable(),
        accessTokenExpiresAt: z.coerce.date().optional().nullable(),
        refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
        scope: z.string().optional().nullable(),
        password: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        issuer: z.string().optional().nullable(),
    });

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> =
    z.strictObject({
        id: z.string(),
        accountId: z.string(),
        providerId: z.string(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        idToken: z.string().optional().nullable(),
        accessTokenExpiresAt: z.coerce.date().optional().nullable(),
        refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
        scope: z.string().optional().nullable(),
        password: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        issuer: z.string().optional().nullable(),
    });

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => AccountWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => AccountCreateWithoutUserInputSchema),
            z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
        ]),
    });

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> =
    z.strictObject({
        data: z.union([
            z.lazy(() => AccountCreateManyUserInputSchema),
            z.lazy(() => AccountCreateManyUserInputSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    });

export const PostCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.PostCreateWithoutCreatedByInput> =
    z.strictObject({
        id: z.cuid().optional(),
        name: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const PostUncheckedCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutCreatedByInput> =
    z.strictObject({
        id: z.cuid().optional(),
        name: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const PostCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => PostWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PostCreateWithoutCreatedByInputSchema),
            z.lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema),
        ]),
    });

export const PostCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.PostCreateManyCreatedByInputEnvelope> =
    z.strictObject({
        data: z.union([
            z.lazy(() => PostCreateManyCreatedByInputSchema),
            z.lazy(() => PostCreateManyCreatedByInputSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    });

export const ActivityCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityCreateWithoutCreatedByInput> =
    z.strictObject({
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tags: z
            .lazy(() => ActivityTagCreateNestedManyWithoutActivitiesInputSchema)
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartCreateNestedManyWithoutActivityInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateWithoutCreatedByInput> =
    z.strictObject({
        id: z.number().int().optional(),
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tags: z
            .lazy(
                () =>
                    ActivityTagUncheckedCreateNestedManyWithoutActivitiesInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutActivityInputSchema,
            )
            .optional(),
    });

export const ActivityCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ActivityCreateWithoutCreatedByInputSchema),
            z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputSchema),
        ]),
    });

export const ActivityCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.ActivityCreateManyCreatedByInputEnvelope> =
    z.strictObject({
        data: z.union([
            z.lazy(() => ActivityCreateManyCreatedByInputSchema),
            z.lazy(() => ActivityCreateManyCreatedByInputSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    });

export const UserActivityStartCreateWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartCreateWithoutUserInput> =
    z.strictObject({
        activity: z.lazy(() => ActivityCreateNestedOneWithoutStarsInputSchema),
    });

export const UserActivityStartUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedCreateWithoutUserInput> =
    z.strictObject({
        activityID: z.number().int(),
    });

export const UserActivityStartCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartCreateOrConnectWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserActivityStartCreateWithoutUserInputSchema),
            z.lazy(
                () => UserActivityStartUncheckedCreateWithoutUserInputSchema,
            ),
        ]),
    });

export const UserActivityStartCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserActivityStartCreateManyUserInputEnvelope> =
    z.strictObject({
        data: z.union([
            z.lazy(() => UserActivityStartCreateManyUserInputSchema),
            z.lazy(() => UserActivityStartCreateManyUserInputSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    });

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => SessionWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => SessionUpdateWithoutUserInputSchema),
            z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
        ]),
        create: z.union([
            z.lazy(() => SessionCreateWithoutUserInputSchema),
            z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
        ]),
    });

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => SessionWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => SessionUpdateWithoutUserInputSchema),
            z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
        ]),
    });

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => SessionScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => SessionUpdateManyMutationInputSchema),
            z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema),
        ]),
    });

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => SessionScalarWhereInputSchema),
                z.lazy(() => SessionScalarWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => SessionScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => SessionScalarWhereInputSchema),
                z.lazy(() => SessionScalarWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        token: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        ipAddress: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userAgent: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
    });

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => AccountWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => AccountUpdateWithoutUserInputSchema),
            z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
        ]),
        create: z.union([
            z.lazy(() => AccountCreateWithoutUserInputSchema),
            z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
        ]),
    });

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => AccountWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => AccountUpdateWithoutUserInputSchema),
            z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
        ]),
    });

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => AccountScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => AccountUpdateManyMutationInputSchema),
            z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema),
        ]),
    });

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => AccountScalarWhereInputSchema),
                z.lazy(() => AccountScalarWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => AccountScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AccountScalarWhereInputSchema),
                z.lazy(() => AccountScalarWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        providerId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        accessToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        refreshToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        idToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.lazy(() => DateTimeNullableFilterSchema),
                z.coerce.date(),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.lazy(() => DateTimeNullableFilterSchema),
                z.coerce.date(),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        issuer: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
    });

export const PostUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => PostWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => PostUpdateWithoutCreatedByInputSchema),
            z.lazy(() => PostUncheckedUpdateWithoutCreatedByInputSchema),
        ]),
        create: z.union([
            z.lazy(() => PostCreateWithoutCreatedByInputSchema),
            z.lazy(() => PostUncheckedCreateWithoutCreatedByInputSchema),
        ]),
    });

export const PostUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => PostWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => PostUpdateWithoutCreatedByInputSchema),
            z.lazy(() => PostUncheckedUpdateWithoutCreatedByInputSchema),
        ]),
    });

export const PostUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => PostScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => PostUpdateManyMutationInputSchema),
            z.lazy(() => PostUncheckedUpdateManyWithoutCreatedByInputSchema),
        ]),
    });

export const PostScalarWhereInputSchema: z.ZodType<Prisma.PostScalarWhereInput> =
    z.strictObject({
        AND: z
            .union([
                z.lazy(() => PostScalarWhereInputSchema),
                z.lazy(() => PostScalarWhereInputSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => PostScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PostScalarWhereInputSchema),
                z.lazy(() => PostScalarWhereInputSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        createdById: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
    });

export const ActivityUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => ActivityUpdateWithoutCreatedByInputSchema),
            z.lazy(() => ActivityUncheckedUpdateWithoutCreatedByInputSchema),
        ]),
        create: z.union([
            z.lazy(() => ActivityCreateWithoutCreatedByInputSchema),
            z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputSchema),
        ]),
    });

export const ActivityUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => ActivityUpdateWithoutCreatedByInputSchema),
            z.lazy(() => ActivityUncheckedUpdateWithoutCreatedByInputSchema),
        ]),
    });

export const ActivityUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutCreatedByInput> =
    z.strictObject({
        where: z.lazy(() => ActivityScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => ActivityUpdateManyMutationInputSchema),
            z.lazy(
                () => ActivityUncheckedUpdateManyWithoutCreatedByInputSchema,
            ),
        ]),
    });

export const UserActivityStartUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUpsertWithWhereUniqueWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => UserActivityStartUpdateWithoutUserInputSchema),
            z.lazy(
                () => UserActivityStartUncheckedUpdateWithoutUserInputSchema,
            ),
        ]),
        create: z.union([
            z.lazy(() => UserActivityStartCreateWithoutUserInputSchema),
            z.lazy(
                () => UserActivityStartUncheckedCreateWithoutUserInputSchema,
            ),
        ]),
    });

export const UserActivityStartUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUpdateWithWhereUniqueWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => UserActivityStartUpdateWithoutUserInputSchema),
            z.lazy(
                () => UserActivityStartUncheckedUpdateWithoutUserInputSchema,
            ),
        ]),
    });

export const UserActivityStartUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUpdateManyWithWhereWithoutUserInput> =
    z.strictObject({
        where: z.lazy(() => UserActivityStartScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => UserActivityStartUpdateManyMutationInputSchema),
            z.lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutUserInputSchema,
            ),
        ]),
    });

export const UserCreateWithoutStarsInputSchema: z.ZodType<Prisma.UserCreateWithoutStarsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
    });

export const UserUncheckedCreateWithoutStarsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStarsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
    });

export const UserCreateOrConnectWithoutStarsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStarsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutStarsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutStarsInputSchema),
        ]),
    });

export const ActivityCreateWithoutStarsInputSchema: z.ZodType<Prisma.ActivityCreateWithoutStarsInput> =
    z.strictObject({
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tags: z
            .lazy(() => ActivityTagCreateNestedManyWithoutActivitiesInputSchema)
            .optional(),
        createdBy: z.lazy(
            () => UserCreateNestedOneWithoutCreatedActivitiesInputSchema,
        ),
    });

export const ActivityUncheckedCreateWithoutStarsInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateWithoutStarsInput> =
    z.strictObject({
        id: z.number().int().optional(),
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdById: z.string(),
        tags: z
            .lazy(
                () =>
                    ActivityTagUncheckedCreateNestedManyWithoutActivitiesInputSchema,
            )
            .optional(),
    });

export const ActivityCreateOrConnectWithoutStarsInputSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutStarsInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ActivityCreateWithoutStarsInputSchema),
            z.lazy(() => ActivityUncheckedCreateWithoutStarsInputSchema),
        ]),
    });

export const UserUpsertWithoutStarsInputSchema: z.ZodType<Prisma.UserUpsertWithoutStarsInput> =
    z.strictObject({
        update: z.union([
            z.lazy(() => UserUpdateWithoutStarsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutStarsInputSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutStarsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutStarsInputSchema),
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional(),
    });

export const UserUpdateToOneWithWhereWithoutStarsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStarsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutStarsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutStarsInputSchema),
        ]),
    });

export const UserUpdateWithoutStarsInputSchema: z.ZodType<Prisma.UserUpdateWithoutStarsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
    });

export const UserUncheckedUpdateWithoutStarsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutStarsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUpsertWithoutStarsInputSchema: z.ZodType<Prisma.ActivityUpsertWithoutStarsInput> =
    z.strictObject({
        update: z.union([
            z.lazy(() => ActivityUpdateWithoutStarsInputSchema),
            z.lazy(() => ActivityUncheckedUpdateWithoutStarsInputSchema),
        ]),
        create: z.union([
            z.lazy(() => ActivityCreateWithoutStarsInputSchema),
            z.lazy(() => ActivityUncheckedCreateWithoutStarsInputSchema),
        ]),
        where: z.lazy(() => ActivityWhereInputSchema).optional(),
    });

export const ActivityUpdateToOneWithWhereWithoutStarsInputSchema: z.ZodType<Prisma.ActivityUpdateToOneWithWhereWithoutStarsInput> =
    z.strictObject({
        where: z.lazy(() => ActivityWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ActivityUpdateWithoutStarsInputSchema),
            z.lazy(() => ActivityUncheckedUpdateWithoutStarsInputSchema),
        ]),
    });

export const ActivityUpdateWithoutStarsInputSchema: z.ZodType<Prisma.ActivityUpdateWithoutStarsInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tags: z
            .lazy(() => ActivityTagUpdateManyWithoutActivitiesNestedInputSchema)
            .optional(),
        createdBy: z
            .lazy(
                () =>
                    UserUpdateOneRequiredWithoutCreatedActivitiesNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedUpdateWithoutStarsInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateWithoutStarsInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tags: z
            .lazy(
                () =>
                    ActivityTagUncheckedUpdateManyWithoutActivitiesNestedInputSchema,
            )
            .optional(),
    });

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        accounts: z
            .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartCreateNestedManyWithoutUserInputSchema)
            .optional(),
    });

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        accounts: z
            .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutUserInputSchema,
            )
            .optional(),
    });

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutSessionsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ]),
    });

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> =
    z.strictObject({
        update: z.union([
            z.lazy(() => UserUpdateWithoutSessionsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutSessionsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional(),
    });

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutSessionsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
        ]),
    });

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accounts: z
            .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartUpdateManyWithoutUserNestedInputSchema)
            .optional(),
    });

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accounts: z
            .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutUserNestedInputSchema,
            )
            .optional(),
    });

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityCreateNestedManyWithoutCreatedByInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartCreateNestedManyWithoutUserInputSchema)
            .optional(),
    });

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> =
    z.strictObject({
        id: z.string(),
        name: z.string(),
        username: z.string(),
        email: z.string(),
        emailVerified: z.boolean().optional(),
        image: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        sessions: z
            .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedCreateNestedManyWithoutCreatedByInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedCreateNestedManyWithoutUserInputSchema,
            )
            .optional(),
    });

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutAccountsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
        ]),
    });

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> =
    z.strictObject({
        update: z.union([
            z.lazy(() => UserUpdateWithoutAccountsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutAccountsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional(),
    });

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> =
    z.strictObject({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutAccountsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
        ]),
    });

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(() => PostUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        createdActivities: z
            .lazy(() => ActivityUpdateManyWithoutCreatedByNestedInputSchema)
            .optional(),
        stars: z
            .lazy(() => UserActivityStartUpdateManyWithoutUserNestedInputSchema)
            .optional(),
    });

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        username: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        email: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        emailVerified: z
            .union([
                z.boolean(),
                z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        image: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        sessions: z
            .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
            .optional(),
        posts: z
            .lazy(
                () => PostUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        createdActivities: z
            .lazy(
                () =>
                    ActivityUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutUserNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUpdateWithoutTagsInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdBy: z
            .lazy(
                () =>
                    UserUpdateOneRequiredWithoutCreatedActivitiesNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUpdateManyWithoutActivityNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateWithoutTagsInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutActivityNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedUpdateManyWithoutTagsInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutTagsInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdById: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartCreateManyActivityInputSchema: z.ZodType<Prisma.UserActivityStartCreateManyActivityInput> =
    z.strictObject({
        userID: z.string(),
    });

export const ActivityTagUpdateWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUpdateWithoutActivitiesInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
    });

export const ActivityTagUncheckedUpdateWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUncheckedUpdateWithoutActivitiesInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
    });

export const ActivityTagUncheckedUpdateManyWithoutActivitiesInputSchema: z.ZodType<Prisma.ActivityTagUncheckedUpdateManyWithoutActivitiesInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tagColor: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        type: z
            .union([
                z.lazy(() => ActivityTagTypeSchema),
                z.lazy(
                    () => EnumActivityTagTypeFieldUpdateOperationsInputSchema,
                ),
            ])
            .optional(),
    });

export const UserActivityStartUpdateWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUpdateWithoutActivityInput> =
    z.strictObject({
        user: z
            .lazy(() => UserUpdateOneRequiredWithoutStarsNestedInputSchema)
            .optional(),
    });

export const UserActivityStartUncheckedUpdateWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateWithoutActivityInput> =
    z.strictObject({
        userID: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartUncheckedUpdateManyWithoutActivityInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateManyWithoutActivityInput> =
    z.strictObject({
        userID: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> =
    z.strictObject({
        id: z.string(),
        expiresAt: z.coerce.date(),
        token: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
    });

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> =
    z.strictObject({
        id: z.string(),
        accountId: z.string(),
        providerId: z.string(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        idToken: z.string().optional().nullable(),
        accessTokenExpiresAt: z.coerce.date().optional().nullable(),
        refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
        scope: z.string().optional().nullable(),
        password: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        issuer: z.string().optional().nullable(),
    });

export const PostCreateManyCreatedByInputSchema: z.ZodType<Prisma.PostCreateManyCreatedByInput> =
    z.strictObject({
        id: z.cuid().optional(),
        name: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const ActivityCreateManyCreatedByInputSchema: z.ZodType<Prisma.ActivityCreateManyCreatedByInput> =
    z.strictObject({
        id: z.number().int().optional(),
        name: z.string(),
        description: z.string(),
        rules: z.string(),
        neededItems: z.string().optional().nullable(),
        minDurationMinutes: z.number().int().optional().nullable(),
        maxDurationMinutes: z.number().int(),
        views: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    });

export const UserActivityStartCreateManyUserInputSchema: z.ZodType<Prisma.UserActivityStartCreateManyUserInput> =
    z.strictObject({
        activityID: z.number().int(),
    });

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        expiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        token: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        ipAddress: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        userAgent: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> =
    z.strictObject({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accountId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        providerId: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        accessToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        idToken: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        accessTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        refreshTokenExpiresAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        scope: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        password: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        issuer: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
    });

export const PostUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUpdateWithoutCreatedByInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const PostUncheckedUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutCreatedByInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const PostUncheckedUpdateManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCreatedByInput> =
    z.strictObject({
        id: z
            .union([
                z.cuid(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const ActivityUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUpdateWithoutCreatedByInput> =
    z.strictObject({
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tags: z
            .lazy(() => ActivityTagUpdateManyWithoutActivitiesNestedInputSchema)
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUpdateManyWithoutActivityNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateWithoutCreatedByInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        tags: z
            .lazy(
                () =>
                    ActivityTagUncheckedUpdateManyWithoutActivitiesNestedInputSchema,
            )
            .optional(),
        stars: z
            .lazy(
                () =>
                    UserActivityStartUncheckedUpdateManyWithoutActivityNestedInputSchema,
            )
            .optional(),
    });

export const ActivityUncheckedUpdateManyWithoutCreatedByInputSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutCreatedByInput> =
    z.strictObject({
        id: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        rules: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        neededItems: z
            .union([
                z.string(),
                z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        minDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
            ])
            .optional()
            .nullable(),
        maxDurationMinutes: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        views: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        createdAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUpdateWithoutUserInput> =
    z.strictObject({
        activity: z
            .lazy(() => ActivityUpdateOneRequiredWithoutStarsNestedInputSchema)
            .optional(),
    });

export const UserActivityStartUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateWithoutUserInput> =
    z.strictObject({
        activityID: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

export const UserActivityStartUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserActivityStartUncheckedUpdateManyWithoutUserInput> =
    z.strictObject({
        activityID: z
            .union([
                z.number().int(),
                z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
    });

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ActivityTagFindFirstArgsSchema: z.ZodType<Prisma.ActivityTagFindFirstArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityTagOrderByWithRelationInputSchema.array(),
                    ActivityTagOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityTagWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    ActivityTagScalarFieldEnumSchema,
                    ActivityTagScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const ActivityTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ActivityTagFindFirstOrThrowArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityTagOrderByWithRelationInputSchema.array(),
                    ActivityTagOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityTagWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    ActivityTagScalarFieldEnumSchema,
                    ActivityTagScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const ActivityTagFindManyArgsSchema: z.ZodType<Prisma.ActivityTagFindManyArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityTagOrderByWithRelationInputSchema.array(),
                    ActivityTagOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityTagWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    ActivityTagScalarFieldEnumSchema,
                    ActivityTagScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const ActivityTagAggregateArgsSchema: z.ZodType<Prisma.ActivityTagAggregateArgs> =
    z
        .object({
            where: ActivityTagWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityTagOrderByWithRelationInputSchema.array(),
                    ActivityTagOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityTagWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const ActivityTagGroupByArgsSchema: z.ZodType<Prisma.ActivityTagGroupByArgs> =
    z
        .object({
            where: ActivityTagWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityTagOrderByWithAggregationInputSchema.array(),
                    ActivityTagOrderByWithAggregationInputSchema,
                ])
                .optional(),
            by: ActivityTagScalarFieldEnumSchema.array(),
            having: ActivityTagScalarWhereWithAggregatesInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const ActivityTagFindUniqueArgsSchema: z.ZodType<Prisma.ActivityTagFindUniqueArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereUniqueInputSchema,
        })
        .strict();

export const ActivityTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ActivityTagFindUniqueOrThrowArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereUniqueInputSchema,
        })
        .strict();

export const ActivityFindFirstArgsSchema: z.ZodType<Prisma.ActivityFindFirstArgs> =
    z
        .object({
            select: ActivitySelectSchema.optional(),
            include: ActivityIncludeSchema.optional(),
            where: ActivityWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityOrderByWithRelationInputSchema.array(),
                    ActivityOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    ActivityScalarFieldEnumSchema,
                    ActivityScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const ActivityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ActivityFindFirstOrThrowArgs> =
    z
        .object({
            select: ActivitySelectSchema.optional(),
            include: ActivityIncludeSchema.optional(),
            where: ActivityWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityOrderByWithRelationInputSchema.array(),
                    ActivityOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    ActivityScalarFieldEnumSchema,
                    ActivityScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const ActivityFindManyArgsSchema: z.ZodType<Prisma.ActivityFindManyArgs> =
    z
        .object({
            select: ActivitySelectSchema.optional(),
            include: ActivityIncludeSchema.optional(),
            where: ActivityWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityOrderByWithRelationInputSchema.array(),
                    ActivityOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    ActivityScalarFieldEnumSchema,
                    ActivityScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const ActivityAggregateArgsSchema: z.ZodType<Prisma.ActivityAggregateArgs> =
    z
        .object({
            where: ActivityWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityOrderByWithRelationInputSchema.array(),
                    ActivityOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: ActivityWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const ActivityGroupByArgsSchema: z.ZodType<Prisma.ActivityGroupByArgs> =
    z
        .object({
            where: ActivityWhereInputSchema.optional(),
            orderBy: z
                .union([
                    ActivityOrderByWithAggregationInputSchema.array(),
                    ActivityOrderByWithAggregationInputSchema,
                ])
                .optional(),
            by: ActivityScalarFieldEnumSchema.array(),
            having: ActivityScalarWhereWithAggregatesInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const ActivityFindUniqueArgsSchema: z.ZodType<Prisma.ActivityFindUniqueArgs> =
    z
        .object({
            select: ActivitySelectSchema.optional(),
            include: ActivityIncludeSchema.optional(),
            where: ActivityWhereUniqueInputSchema,
        })
        .strict();

export const ActivityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ActivityFindUniqueOrThrowArgs> =
    z
        .object({
            select: ActivitySelectSchema.optional(),
            include: ActivityIncludeSchema.optional(),
            where: ActivityWhereUniqueInputSchema,
        })
        .strict();

export const PostFindFirstArgsSchema: z.ZodType<Prisma.PostFindFirstArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        where: PostWhereInputSchema.optional(),
        orderBy: z
            .union([
                PostOrderByWithRelationInputSchema.array(),
                PostOrderByWithRelationInputSchema,
            ])
            .optional(),
        cursor: PostWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z
            .union([
                PostScalarFieldEnumSchema,
                PostScalarFieldEnumSchema.array(),
            ])
            .optional(),
    })
    .strict();

export const PostFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PostFindFirstOrThrowArgs> =
    z
        .object({
            select: PostSelectSchema.optional(),
            include: PostIncludeSchema.optional(),
            where: PostWhereInputSchema.optional(),
            orderBy: z
                .union([
                    PostOrderByWithRelationInputSchema.array(),
                    PostOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: PostWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    PostScalarFieldEnumSchema,
                    PostScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const PostFindManyArgsSchema: z.ZodType<Prisma.PostFindManyArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        where: PostWhereInputSchema.optional(),
        orderBy: z
            .union([
                PostOrderByWithRelationInputSchema.array(),
                PostOrderByWithRelationInputSchema,
            ])
            .optional(),
        cursor: PostWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z
            .union([
                PostScalarFieldEnumSchema,
                PostScalarFieldEnumSchema.array(),
            ])
            .optional(),
    })
    .strict();

export const PostAggregateArgsSchema: z.ZodType<Prisma.PostAggregateArgs> = z
    .object({
        where: PostWhereInputSchema.optional(),
        orderBy: z
            .union([
                PostOrderByWithRelationInputSchema.array(),
                PostOrderByWithRelationInputSchema,
            ])
            .optional(),
        cursor: PostWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
    })
    .strict();

export const PostGroupByArgsSchema: z.ZodType<Prisma.PostGroupByArgs> = z
    .object({
        where: PostWhereInputSchema.optional(),
        orderBy: z
            .union([
                PostOrderByWithAggregationInputSchema.array(),
                PostOrderByWithAggregationInputSchema,
            ])
            .optional(),
        by: PostScalarFieldEnumSchema.array(),
        having: PostScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
    })
    .strict();

export const PostFindUniqueArgsSchema: z.ZodType<Prisma.PostFindUniqueArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        where: PostWhereUniqueInputSchema,
    })
    .strict();

export const PostFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PostFindUniqueOrThrowArgs> =
    z
        .object({
            select: PostSelectSchema.optional(),
            include: PostIncludeSchema.optional(),
            where: PostWhereUniqueInputSchema,
        })
        .strict();

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        where: UserWhereInputSchema.optional(),
        orderBy: z
            .union([
                UserOrderByWithRelationInputSchema.array(),
                UserOrderByWithRelationInputSchema,
            ])
            .optional(),
        cursor: UserWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z
            .union([
                UserScalarFieldEnumSchema,
                UserScalarFieldEnumSchema.array(),
            ])
            .optional(),
    })
    .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
    z
        .object({
            select: UserSelectSchema.optional(),
            include: UserIncludeSchema.optional(),
            where: UserWhereInputSchema.optional(),
            orderBy: z
                .union([
                    UserOrderByWithRelationInputSchema.array(),
                    UserOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: UserWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    UserScalarFieldEnumSchema,
                    UserScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        where: UserWhereInputSchema.optional(),
        orderBy: z
            .union([
                UserOrderByWithRelationInputSchema.array(),
                UserOrderByWithRelationInputSchema,
            ])
            .optional(),
        cursor: UserWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z
            .union([
                UserScalarFieldEnumSchema,
                UserScalarFieldEnumSchema.array(),
            ])
            .optional(),
    })
    .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
    .object({
        where: UserWhereInputSchema.optional(),
        orderBy: z
            .union([
                UserOrderByWithRelationInputSchema.array(),
                UserOrderByWithRelationInputSchema,
            ])
            .optional(),
        cursor: UserWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
    })
    .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
    .object({
        where: UserWhereInputSchema.optional(),
        orderBy: z
            .union([
                UserOrderByWithAggregationInputSchema.array(),
                UserOrderByWithAggregationInputSchema,
            ])
            .optional(),
        by: UserScalarFieldEnumSchema.array(),
        having: UserScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
    })
    .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        where: UserWhereUniqueInputSchema,
    })
    .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
    z
        .object({
            select: UserSelectSchema.optional(),
            include: UserIncludeSchema.optional(),
            where: UserWhereUniqueInputSchema,
        })
        .strict();

export const UserActivityStartFindFirstArgsSchema: z.ZodType<Prisma.UserActivityStartFindFirstArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereInputSchema.optional(),
            orderBy: z
                .union([
                    UserActivityStartOrderByWithRelationInputSchema.array(),
                    UserActivityStartOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: UserActivityStartWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    UserActivityStartScalarFieldEnumSchema,
                    UserActivityStartScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const UserActivityStartFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserActivityStartFindFirstOrThrowArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereInputSchema.optional(),
            orderBy: z
                .union([
                    UserActivityStartOrderByWithRelationInputSchema.array(),
                    UserActivityStartOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: UserActivityStartWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    UserActivityStartScalarFieldEnumSchema,
                    UserActivityStartScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const UserActivityStartFindManyArgsSchema: z.ZodType<Prisma.UserActivityStartFindManyArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereInputSchema.optional(),
            orderBy: z
                .union([
                    UserActivityStartOrderByWithRelationInputSchema.array(),
                    UserActivityStartOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: UserActivityStartWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    UserActivityStartScalarFieldEnumSchema,
                    UserActivityStartScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const UserActivityStartAggregateArgsSchema: z.ZodType<Prisma.UserActivityStartAggregateArgs> =
    z
        .object({
            where: UserActivityStartWhereInputSchema.optional(),
            orderBy: z
                .union([
                    UserActivityStartOrderByWithRelationInputSchema.array(),
                    UserActivityStartOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: UserActivityStartWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const UserActivityStartGroupByArgsSchema: z.ZodType<Prisma.UserActivityStartGroupByArgs> =
    z
        .object({
            where: UserActivityStartWhereInputSchema.optional(),
            orderBy: z
                .union([
                    UserActivityStartOrderByWithAggregationInputSchema.array(),
                    UserActivityStartOrderByWithAggregationInputSchema,
                ])
                .optional(),
            by: UserActivityStartScalarFieldEnumSchema.array(),
            having: UserActivityStartScalarWhereWithAggregatesInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const UserActivityStartFindUniqueArgsSchema: z.ZodType<Prisma.UserActivityStartFindUniqueArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereUniqueInputSchema,
        })
        .strict();

export const UserActivityStartFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserActivityStartFindUniqueOrThrowArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereUniqueInputSchema,
        })
        .strict();

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> =
    z
        .object({
            select: SessionSelectSchema.optional(),
            include: SessionIncludeSchema.optional(),
            where: SessionWhereInputSchema.optional(),
            orderBy: z
                .union([
                    SessionOrderByWithRelationInputSchema.array(),
                    SessionOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: SessionWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    SessionScalarFieldEnumSchema,
                    SessionScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> =
    z
        .object({
            select: SessionSelectSchema.optional(),
            include: SessionIncludeSchema.optional(),
            where: SessionWhereInputSchema.optional(),
            orderBy: z
                .union([
                    SessionOrderByWithRelationInputSchema.array(),
                    SessionOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: SessionWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    SessionScalarFieldEnumSchema,
                    SessionScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> =
    z
        .object({
            select: SessionSelectSchema.optional(),
            include: SessionIncludeSchema.optional(),
            where: SessionWhereInputSchema.optional(),
            orderBy: z
                .union([
                    SessionOrderByWithRelationInputSchema.array(),
                    SessionOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: SessionWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    SessionScalarFieldEnumSchema,
                    SessionScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> =
    z
        .object({
            where: SessionWhereInputSchema.optional(),
            orderBy: z
                .union([
                    SessionOrderByWithRelationInputSchema.array(),
                    SessionOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: SessionWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z
    .object({
        where: SessionWhereInputSchema.optional(),
        orderBy: z
            .union([
                SessionOrderByWithAggregationInputSchema.array(),
                SessionOrderByWithAggregationInputSchema,
            ])
            .optional(),
        by: SessionScalarFieldEnumSchema.array(),
        having: SessionScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
    })
    .strict();

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> =
    z
        .object({
            select: SessionSelectSchema.optional(),
            include: SessionIncludeSchema.optional(),
            where: SessionWhereUniqueInputSchema,
        })
        .strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> =
    z
        .object({
            select: SessionSelectSchema.optional(),
            include: SessionIncludeSchema.optional(),
            where: SessionWhereUniqueInputSchema,
        })
        .strict();

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> =
    z
        .object({
            select: AccountSelectSchema.optional(),
            include: AccountIncludeSchema.optional(),
            where: AccountWhereInputSchema.optional(),
            orderBy: z
                .union([
                    AccountOrderByWithRelationInputSchema.array(),
                    AccountOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: AccountWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    AccountScalarFieldEnumSchema,
                    AccountScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> =
    z
        .object({
            select: AccountSelectSchema.optional(),
            include: AccountIncludeSchema.optional(),
            where: AccountWhereInputSchema.optional(),
            orderBy: z
                .union([
                    AccountOrderByWithRelationInputSchema.array(),
                    AccountOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: AccountWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    AccountScalarFieldEnumSchema,
                    AccountScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> =
    z
        .object({
            select: AccountSelectSchema.optional(),
            include: AccountIncludeSchema.optional(),
            where: AccountWhereInputSchema.optional(),
            orderBy: z
                .union([
                    AccountOrderByWithRelationInputSchema.array(),
                    AccountOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: AccountWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    AccountScalarFieldEnumSchema,
                    AccountScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> =
    z
        .object({
            where: AccountWhereInputSchema.optional(),
            orderBy: z
                .union([
                    AccountOrderByWithRelationInputSchema.array(),
                    AccountOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: AccountWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z
    .object({
        where: AccountWhereInputSchema.optional(),
        orderBy: z
            .union([
                AccountOrderByWithAggregationInputSchema.array(),
                AccountOrderByWithAggregationInputSchema,
            ])
            .optional(),
        by: AccountScalarFieldEnumSchema.array(),
        having: AccountScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
    })
    .strict();

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> =
    z
        .object({
            select: AccountSelectSchema.optional(),
            include: AccountIncludeSchema.optional(),
            where: AccountWhereUniqueInputSchema,
        })
        .strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> =
    z
        .object({
            select: AccountSelectSchema.optional(),
            include: AccountIncludeSchema.optional(),
            where: AccountWhereUniqueInputSchema,
        })
        .strict();

export const VerificationFindFirstArgsSchema: z.ZodType<Prisma.VerificationFindFirstArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereInputSchema.optional(),
            orderBy: z
                .union([
                    VerificationOrderByWithRelationInputSchema.array(),
                    VerificationOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: VerificationWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    VerificationScalarFieldEnumSchema,
                    VerificationScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const VerificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereInputSchema.optional(),
            orderBy: z
                .union([
                    VerificationOrderByWithRelationInputSchema.array(),
                    VerificationOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: VerificationWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    VerificationScalarFieldEnumSchema,
                    VerificationScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const VerificationFindManyArgsSchema: z.ZodType<Prisma.VerificationFindManyArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereInputSchema.optional(),
            orderBy: z
                .union([
                    VerificationOrderByWithRelationInputSchema.array(),
                    VerificationOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: VerificationWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([
                    VerificationScalarFieldEnumSchema,
                    VerificationScalarFieldEnumSchema.array(),
                ])
                .optional(),
        })
        .strict();

export const VerificationAggregateArgsSchema: z.ZodType<Prisma.VerificationAggregateArgs> =
    z
        .object({
            where: VerificationWhereInputSchema.optional(),
            orderBy: z
                .union([
                    VerificationOrderByWithRelationInputSchema.array(),
                    VerificationOrderByWithRelationInputSchema,
                ])
                .optional(),
            cursor: VerificationWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const VerificationGroupByArgsSchema: z.ZodType<Prisma.VerificationGroupByArgs> =
    z
        .object({
            where: VerificationWhereInputSchema.optional(),
            orderBy: z
                .union([
                    VerificationOrderByWithAggregationInputSchema.array(),
                    VerificationOrderByWithAggregationInputSchema,
                ])
                .optional(),
            by: VerificationScalarFieldEnumSchema.array(),
            having: VerificationScalarWhereWithAggregatesInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
        })
        .strict();

export const VerificationFindUniqueArgsSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereUniqueInputSchema,
        })
        .strict();

export const VerificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereUniqueInputSchema,
        })
        .strict();

export const ActivityTagCreateArgsSchema: z.ZodType<Prisma.ActivityTagCreateArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            data: z.union([
                ActivityTagCreateInputSchema,
                ActivityTagUncheckedCreateInputSchema,
            ]),
        })
        .strict();

export const ActivityTagUpsertArgsSchema: z.ZodType<Prisma.ActivityTagUpsertArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereUniqueInputSchema,
            create: z.union([
                ActivityTagCreateInputSchema,
                ActivityTagUncheckedCreateInputSchema,
            ]),
            update: z.union([
                ActivityTagUpdateInputSchema,
                ActivityTagUncheckedUpdateInputSchema,
            ]),
        })
        .strict();

export const ActivityTagCreateManyArgsSchema: z.ZodType<Prisma.ActivityTagCreateManyArgs> =
    z
        .object({
            data: z.union([
                ActivityTagCreateManyInputSchema,
                ActivityTagCreateManyInputSchema.array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();

export const ActivityTagDeleteArgsSchema: z.ZodType<Prisma.ActivityTagDeleteArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            where: ActivityTagWhereUniqueInputSchema,
        })
        .strict();

export const ActivityTagUpdateArgsSchema: z.ZodType<Prisma.ActivityTagUpdateArgs> =
    z
        .object({
            select: ActivityTagSelectSchema.optional(),
            include: ActivityTagIncludeSchema.optional(),
            data: z.union([
                ActivityTagUpdateInputSchema,
                ActivityTagUncheckedUpdateInputSchema,
            ]),
            where: ActivityTagWhereUniqueInputSchema,
        })
        .strict();

export const ActivityTagUpdateManyArgsSchema: z.ZodType<Prisma.ActivityTagUpdateManyArgs> =
    z
        .object({
            data: z.union([
                ActivityTagUpdateManyMutationInputSchema,
                ActivityTagUncheckedUpdateManyInputSchema,
            ]),
            where: ActivityTagWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const ActivityTagDeleteManyArgsSchema: z.ZodType<Prisma.ActivityTagDeleteManyArgs> =
    z
        .object({
            where: ActivityTagWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const ActivityCreateArgsSchema: z.ZodType<Prisma.ActivityCreateArgs> = z
    .object({
        select: ActivitySelectSchema.optional(),
        include: ActivityIncludeSchema.optional(),
        data: z.union([
            ActivityCreateInputSchema,
            ActivityUncheckedCreateInputSchema,
        ]),
    })
    .strict();

export const ActivityUpsertArgsSchema: z.ZodType<Prisma.ActivityUpsertArgs> = z
    .object({
        select: ActivitySelectSchema.optional(),
        include: ActivityIncludeSchema.optional(),
        where: ActivityWhereUniqueInputSchema,
        create: z.union([
            ActivityCreateInputSchema,
            ActivityUncheckedCreateInputSchema,
        ]),
        update: z.union([
            ActivityUpdateInputSchema,
            ActivityUncheckedUpdateInputSchema,
        ]),
    })
    .strict();

export const ActivityCreateManyArgsSchema: z.ZodType<Prisma.ActivityCreateManyArgs> =
    z
        .object({
            data: z.union([
                ActivityCreateManyInputSchema,
                ActivityCreateManyInputSchema.array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();

export const ActivityDeleteArgsSchema: z.ZodType<Prisma.ActivityDeleteArgs> = z
    .object({
        select: ActivitySelectSchema.optional(),
        include: ActivityIncludeSchema.optional(),
        where: ActivityWhereUniqueInputSchema,
    })
    .strict();

export const ActivityUpdateArgsSchema: z.ZodType<Prisma.ActivityUpdateArgs> = z
    .object({
        select: ActivitySelectSchema.optional(),
        include: ActivityIncludeSchema.optional(),
        data: z.union([
            ActivityUpdateInputSchema,
            ActivityUncheckedUpdateInputSchema,
        ]),
        where: ActivityWhereUniqueInputSchema,
    })
    .strict();

export const ActivityUpdateManyArgsSchema: z.ZodType<Prisma.ActivityUpdateManyArgs> =
    z
        .object({
            data: z.union([
                ActivityUpdateManyMutationInputSchema,
                ActivityUncheckedUpdateManyInputSchema,
            ]),
            where: ActivityWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const ActivityDeleteManyArgsSchema: z.ZodType<Prisma.ActivityDeleteManyArgs> =
    z
        .object({
            where: ActivityWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const PostCreateArgsSchema: z.ZodType<Prisma.PostCreateArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        data: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
    })
    .strict();

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        where: PostWhereUniqueInputSchema,
        create: z.union([
            PostCreateInputSchema,
            PostUncheckedCreateInputSchema,
        ]),
        update: z.union([
            PostUpdateInputSchema,
            PostUncheckedUpdateInputSchema,
        ]),
    })
    .strict();

export const PostCreateManyArgsSchema: z.ZodType<Prisma.PostCreateManyArgs> = z
    .object({
        data: z.union([
            PostCreateManyInputSchema,
            PostCreateManyInputSchema.array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PostDeleteArgsSchema: z.ZodType<Prisma.PostDeleteArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        where: PostWhereUniqueInputSchema,
    })
    .strict();

export const PostUpdateArgsSchema: z.ZodType<Prisma.PostUpdateArgs> = z
    .object({
        select: PostSelectSchema.optional(),
        include: PostIncludeSchema.optional(),
        data: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
        where: PostWhereUniqueInputSchema,
    })
    .strict();

export const PostUpdateManyArgsSchema: z.ZodType<Prisma.PostUpdateManyArgs> = z
    .object({
        data: z.union([
            PostUpdateManyMutationInputSchema,
            PostUncheckedUpdateManyInputSchema,
        ]),
        where: PostWhereInputSchema.optional(),
        limit: z.number().optional(),
    })
    .strict();

export const PostDeleteManyArgsSchema: z.ZodType<Prisma.PostDeleteManyArgs> = z
    .object({
        where: PostWhereInputSchema.optional(),
        limit: z.number().optional(),
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    })
    .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        where: UserWhereUniqueInputSchema,
        create: z.union([
            UserCreateInputSchema,
            UserUncheckedCreateInputSchema,
        ]),
        update: z.union([
            UserUpdateInputSchema,
            UserUncheckedUpdateInputSchema,
        ]),
    })
    .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
    .object({
        data: z.union([
            UserCreateManyInputSchema,
            UserCreateManyInputSchema.array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        where: UserWhereUniqueInputSchema,
    })
    .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
        where: UserWhereUniqueInputSchema,
    })
    .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
    .object({
        data: z.union([
            UserUpdateManyMutationInputSchema,
            UserUncheckedUpdateManyInputSchema,
        ]),
        where: UserWhereInputSchema.optional(),
        limit: z.number().optional(),
    })
    .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
    .object({
        where: UserWhereInputSchema.optional(),
        limit: z.number().optional(),
    })
    .strict();

export const UserActivityStartCreateArgsSchema: z.ZodType<Prisma.UserActivityStartCreateArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            data: z.union([
                UserActivityStartCreateInputSchema,
                UserActivityStartUncheckedCreateInputSchema,
            ]),
        })
        .strict();

export const UserActivityStartUpsertArgsSchema: z.ZodType<Prisma.UserActivityStartUpsertArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereUniqueInputSchema,
            create: z.union([
                UserActivityStartCreateInputSchema,
                UserActivityStartUncheckedCreateInputSchema,
            ]),
            update: z.union([
                UserActivityStartUpdateInputSchema,
                UserActivityStartUncheckedUpdateInputSchema,
            ]),
        })
        .strict();

export const UserActivityStartCreateManyArgsSchema: z.ZodType<Prisma.UserActivityStartCreateManyArgs> =
    z
        .object({
            data: z.union([
                UserActivityStartCreateManyInputSchema,
                UserActivityStartCreateManyInputSchema.array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();

export const UserActivityStartDeleteArgsSchema: z.ZodType<Prisma.UserActivityStartDeleteArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            where: UserActivityStartWhereUniqueInputSchema,
        })
        .strict();

export const UserActivityStartUpdateArgsSchema: z.ZodType<Prisma.UserActivityStartUpdateArgs> =
    z
        .object({
            select: UserActivityStartSelectSchema.optional(),
            include: UserActivityStartIncludeSchema.optional(),
            data: z.union([
                UserActivityStartUpdateInputSchema,
                UserActivityStartUncheckedUpdateInputSchema,
            ]),
            where: UserActivityStartWhereUniqueInputSchema,
        })
        .strict();

export const UserActivityStartUpdateManyArgsSchema: z.ZodType<Prisma.UserActivityStartUpdateManyArgs> =
    z
        .object({
            data: z.union([
                UserActivityStartUpdateManyMutationInputSchema,
                UserActivityStartUncheckedUpdateManyInputSchema,
            ]),
            where: UserActivityStartWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const UserActivityStartDeleteManyArgsSchema: z.ZodType<Prisma.UserActivityStartDeleteManyArgs> =
    z
        .object({
            where: UserActivityStartWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z
    .object({
        select: SessionSelectSchema.optional(),
        include: SessionIncludeSchema.optional(),
        data: z.union([
            SessionCreateInputSchema,
            SessionUncheckedCreateInputSchema,
        ]),
    })
    .strict();

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z
    .object({
        select: SessionSelectSchema.optional(),
        include: SessionIncludeSchema.optional(),
        where: SessionWhereUniqueInputSchema,
        create: z.union([
            SessionCreateInputSchema,
            SessionUncheckedCreateInputSchema,
        ]),
        update: z.union([
            SessionUpdateInputSchema,
            SessionUncheckedUpdateInputSchema,
        ]),
    })
    .strict();

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> =
    z
        .object({
            data: z.union([
                SessionCreateManyInputSchema,
                SessionCreateManyInputSchema.array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z
    .object({
        select: SessionSelectSchema.optional(),
        include: SessionIncludeSchema.optional(),
        where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z
    .object({
        select: SessionSelectSchema.optional(),
        include: SessionIncludeSchema.optional(),
        data: z.union([
            SessionUpdateInputSchema,
            SessionUncheckedUpdateInputSchema,
        ]),
        where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> =
    z
        .object({
            data: z.union([
                SessionUpdateManyMutationInputSchema,
                SessionUncheckedUpdateManyInputSchema,
            ]),
            where: SessionWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> =
    z
        .object({
            where: SessionWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z
    .object({
        select: AccountSelectSchema.optional(),
        include: AccountIncludeSchema.optional(),
        data: z.union([
            AccountCreateInputSchema,
            AccountUncheckedCreateInputSchema,
        ]),
    })
    .strict();

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z
    .object({
        select: AccountSelectSchema.optional(),
        include: AccountIncludeSchema.optional(),
        where: AccountWhereUniqueInputSchema,
        create: z.union([
            AccountCreateInputSchema,
            AccountUncheckedCreateInputSchema,
        ]),
        update: z.union([
            AccountUpdateInputSchema,
            AccountUncheckedUpdateInputSchema,
        ]),
    })
    .strict();

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> =
    z
        .object({
            data: z.union([
                AccountCreateManyInputSchema,
                AccountCreateManyInputSchema.array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z
    .object({
        select: AccountSelectSchema.optional(),
        include: AccountIncludeSchema.optional(),
        where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z
    .object({
        select: AccountSelectSchema.optional(),
        include: AccountIncludeSchema.optional(),
        data: z.union([
            AccountUpdateInputSchema,
            AccountUncheckedUpdateInputSchema,
        ]),
        where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> =
    z
        .object({
            data: z.union([
                AccountUpdateManyMutationInputSchema,
                AccountUncheckedUpdateManyInputSchema,
            ]),
            where: AccountWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> =
    z
        .object({
            where: AccountWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const VerificationCreateArgsSchema: z.ZodType<Prisma.VerificationCreateArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            data: z.union([
                VerificationCreateInputSchema,
                VerificationUncheckedCreateInputSchema,
            ]),
        })
        .strict();

export const VerificationUpsertArgsSchema: z.ZodType<Prisma.VerificationUpsertArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereUniqueInputSchema,
            create: z.union([
                VerificationCreateInputSchema,
                VerificationUncheckedCreateInputSchema,
            ]),
            update: z.union([
                VerificationUpdateInputSchema,
                VerificationUncheckedUpdateInputSchema,
            ]),
        })
        .strict();

export const VerificationCreateManyArgsSchema: z.ZodType<Prisma.VerificationCreateManyArgs> =
    z
        .object({
            data: z.union([
                VerificationCreateManyInputSchema,
                VerificationCreateManyInputSchema.array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();

export const VerificationDeleteArgsSchema: z.ZodType<Prisma.VerificationDeleteArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            where: VerificationWhereUniqueInputSchema,
        })
        .strict();

export const VerificationUpdateArgsSchema: z.ZodType<Prisma.VerificationUpdateArgs> =
    z
        .object({
            select: VerificationSelectSchema.optional(),
            data: z.union([
                VerificationUpdateInputSchema,
                VerificationUncheckedUpdateInputSchema,
            ]),
            where: VerificationWhereUniqueInputSchema,
        })
        .strict();

export const VerificationUpdateManyArgsSchema: z.ZodType<Prisma.VerificationUpdateManyArgs> =
    z
        .object({
            data: z.union([
                VerificationUpdateManyMutationInputSchema,
                VerificationUncheckedUpdateManyInputSchema,
            ]),
            where: VerificationWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();

export const VerificationDeleteManyArgsSchema: z.ZodType<Prisma.VerificationDeleteManyArgs> =
    z
        .object({
            where: VerificationWhereInputSchema.optional(),
            limit: z.number().optional(),
        })
        .strict();
