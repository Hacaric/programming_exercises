"use client";
import { prisma } from "lib/prisma";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { authClient } from "~/server/better-auth/client";

export async function signIn({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    const { data, error } = await authClient.signIn.username({
        username,
        password,
        callbackURL: "/",
    });
    if (error) console.error(`Error signing in: ${JSON.stringify(error)}`);
    else console.log(`User ${username} signed in`);
    return { data, error };
}

export async function signUp({
    email,
    username,
    password,
}: {
    email: string;
    username: string;
    password: string;
}) {
    const { data, error } = await authClient.signUp.email({
        email,
        name: username,
        username,
        password,
    });
    if (error) console.log(`Error signing up: ${JSON.stringify(error)}`);
    return { data, error };
}

// export async function client_getSession() {
//     return await authClient.getSession();
// }

// export async function client_isUserLoggedIn() {
//     return await client_getSession() ? true : false;
// }

// export async function client_getUserData() {
//     const session = await client_getSession();
//     if (!session)
//         return null;
//     return session.data?.user ?? null;
// }
