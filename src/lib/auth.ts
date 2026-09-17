"use client";
import { redirect } from "next/navigation";
import { authClient } from "~/server/better-auth/client";

export async function signIn({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    const { data, error } = await authClient.signIn.username(
        {
            username,
            password,
        },
        {
            onSuccess: redirect("/"),
        },
    );
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
    console.log(error)
    return { data, error }
}
