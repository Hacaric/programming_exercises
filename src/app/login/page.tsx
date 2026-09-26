'use client'
import { useRouter } from "next/navigation";
import { useState, type InputHTMLAttributes } from "react";
import { signIn, signUp } from "~/lib/auth";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmailAddress(email: string): boolean {
    return emailRegex.test(email);
}


export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function login() {
        const { data, error } = await signIn({ username, password });
        if (error)
            console.error(`signIn returned error: ${error}`);
        console.log(`signIn returned data: ${data}`);
        if (!error)
            router.push('/account')
    }

    function allowSubmit(): boolean {
        if (!username) return false;
        if (!password) return false;
        return true;
    }

    return (
        <div className="flex justify-center items-center">
            <form action={login} className="flex flex-col border-4 border-slsk-blue-dark rounded-md p-2 shadow-md gap-1">
                <h3 className="text-3xl text-center text-bold mb-5">Prihlásiť sa</h3>
                <Input label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <Input label="Heslo" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {password && password.length > 5 && <p className="text-red-600 italic text-sm">Chyba: Heslo je už použité</p>}

                <button type="submit" className="rounded-md border-2 border-slsk-blue-dark text-slsk-blue-dark hover:bg-slsk-blue-dark hover:text-white transition-all duration-150 text-xl cursor-pointer" disabled={!allowSubmit()}>Prihlásiť sa</button>

                <p className="text-sm">Nemáte účet? <a href="/register" className="text-slsk-blue-dark underline">Registrovať sa</a></p>
            </form>
        </div>
    )
}

function Input({ label, ...attributes }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex border-2 border-slsk-blue-dark rounded-md overflow-hidden text-xl">
            <label className="bg-slsk-blue-dark text-white min-w-fit flex-1 px-2 text-center font-semibold">{label}</label>
            <input {...attributes} className="flex-3 outline-none px-1" />
        </div>
    )
}


