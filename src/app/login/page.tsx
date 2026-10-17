"use client";
import { useRouter } from "next/navigation";
import { useState, type InputHTMLAttributes } from "react";
import { signIn, signUp } from "~/lib/auth-client";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmailAddress(email: string): boolean {
    return emailRegex.test(email);
}

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    async function login() {
        const { data, error } = await signIn({ username, password });
        if (error) {
            console.error(`signIn returned error: ${error}`);
            setErrorMsg(`Chyba: ${error.message ?? "Neznáma chyba"}`);
        }
        console.log(`signIn returned data: ${data}`);
        if (!error) router.push("/account");
    }

    function allowSubmit(): boolean {
        if (!username) return false;
        if (!password) return false;
        return true;
    }

    return (
        <div className="flex items-center justify-center">
            <form
                action={login}
                className="border-slsk-blue-dark flex flex-col gap-1 rounded-md border-4 p-2 shadow-md"
            >
                <h3 className="text-bold mb-5 text-center text-3xl">
                    Prihlásiť sa
                </h3>
                <Input
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                    label="Heslo"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {errorMsg && (
                    <p className="text-sm text-red-600 italic">{errorMsg}</p>
                )}

                <button
                    type="submit"
                    className="border-slsk-blue-dark text-slsk-blue-dark hover:bg-slsk-blue-dark cursor-pointer rounded-md border-2 text-xl transition-all duration-150 hover:text-white"
                    disabled={!allowSubmit()}
                >
                    Prihlásiť sa
                </button>

                <p className="text-sm">
                    Nemáte účet?{" "}
                    <a
                        href="/register"
                        className="text-slsk-blue-dark underline"
                    >
                        Registrovať sa
                    </a>
                </p>
            </form>
        </div>
    );
}

function Input({
    label,
    ...attributes
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="border-slsk-blue-dark flex overflow-hidden rounded-md border-2 text-xl">
            <label className="bg-slsk-blue-dark min-w-fit flex-1 px-2 text-center font-semibold text-white">
                {label}
            </label>
            <input {...attributes} className="flex-3 px-1 outline-none" />
        </div>
    );
}
