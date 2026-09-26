'use client'
import { authClient } from "~/server/better-auth/client";
import type { AuthSession } from "./page";
import { redirect, useRouter } from "next/navigation";

async function Logout(session: AuthSession) {
    await authClient.revokeSession(session.session);
}

export function LogoutButton(props: {session: AuthSession}) {
    const router = useRouter();
    const { session } = props;
    return <button 
            onClick={async() => {Logout(session); router.push('/')}}
            className="p-1 rounded-md border-2 border-slsk-blue-dark text-slsk-blue-dark hover:bg-slsk-blue-dark hover:text-white transition-all duration-150 text-md cursor-pointer"
        >
            Logout
        </button>

}