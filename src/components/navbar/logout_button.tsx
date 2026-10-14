"use client";
import { authClient } from "~/server/better-auth/client";
import { useRouter } from "next/navigation";
import type { AuthSession } from "~/app/account/page";

async function Logout(session: AuthSession) {
    await authClient.revokeSession(session.session);
}

export function LogoutButton(props: {
    session: AuthSession;
    className?: string;
}) {
    const router = useRouter();
    const { session, className } = props;
    return (
        <button
            onClick={async () => {
                await Logout(session);
                router.push("/");
                router.refresh(); // Make sure to update the UI
            }}
            className={`border-slsk-blue-dark text-slsk-blue-dark hover:bg-slsk-blue-dark text-md cursor-pointer rounded-md border-2 p-1 transition-all duration-150 hover:text-white ${className ?? ""}`}
        >
            Logout
        </button>
    );
}
