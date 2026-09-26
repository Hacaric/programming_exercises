import { headers } from "next/headers";
import { auth } from "~/server/better-auth";

export async function Navbar() {
    const session = await auth.api.getSession({
        headers: await headers(), // Required to read session cookies
    });
    // console.log(`\n\n[debug] Session: ${JSON.stringify(session)}\n\n`)

    // TODO: make this a tailwindcss class
    const linkStyle =
        "cursor-pointer hover:text-slsk-yellow transition-colors duration-100";

    return (
        <div className="bg-slsk-blue-dark sticky top-0 flex h-16 items-center gap-5 p-2 px-4 font-bold text-white">
            <a href="/" className="content-center">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="size-13 flex-none rounded-full bg-white p-1"
                />
            </a>
            <div className="flex items-center gap-5">
                <a href="/" className={linkStyle}>
                    Domov
                </a>
                <a href="/activity" className={linkStyle}>
                    Všetky aktivity
                </a>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className={linkStyle}
                >
                    REZNE ZDARMA
                </a>
            </div>

            
            <div className="flex-1"></div>
            
            
            {!session && 
                <div className="flex-none">
                    <a href="/login" className={linkStyle + " mr-5"}>
                        Login
                    </a>
                    <a href="/register" className={linkStyle}>
                        Register
                    </a>
                </div>
            }
            {session &&
                <div>
                    <a href="/account">Logged in as {session?.user.name}</a>
                </div>
            }
        </div>
    );
}
