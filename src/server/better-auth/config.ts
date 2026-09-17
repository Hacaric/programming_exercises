import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";

import { env } from "~/env";
import { db } from "~/server/db";

export const auth = betterAuth({
    baseURL: {
        allowedHosts: [
            "localhost:3000",
            "hry.skauting.sk",
        ]
    },
    database: prismaAdapter(db, {
        provider: "mysql", // or "sqlite" or "mysql"
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [username({ displayUsername: false })],
});

export type Session = typeof auth.$Infer.Session;
