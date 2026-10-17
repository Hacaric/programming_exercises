import type { Session } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "~/components/navbar/logout_button";
import { auth } from "~/server/better-auth";

// TODO: use native type
export interface AuthSession {
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
        username?: string | null | undefined;
    };
}

export default async function AccountPage() {
    const session: AuthSession | null = await auth.api.getSession({
        headers: await headers(), // Required to read session cookies
    });

    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            <h2>Logged in as {session.user.username}</h2>
            <LogoutButton session={session} />
        </div>
    );
}
