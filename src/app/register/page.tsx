'use client'
import { useState, type InputHTMLAttributes } from "react";
import { signIn, signUp } from "~/lib/auth";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmailAddress(email: string): boolean {
    return emailRegex.test(email);
}


export default function RegisterPage() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    async function register() {
        const { data, error } = await signUp({ username, email, password });
        if (error) { 
            console.error(error);
            return;
        }
        console.log(`Signup returned data: ${data}`);
        const {data: data_login, error: error_login} = await signIn({ username, password });
        if (error_login) {
            setErrorMsg(error_login.message ?? 'Error returned, but no error message returned');
            console.error(error_login);
            return;
        }
        console.log(`Login returned data: ${data_login}`);
        
    }

    function allowSubmit(): boolean {
        if (!username) return false;
        if (!email || !validateEmailAddress(email)) return false;
        if (!password || password != passwordRepeat) return false;
        return true;
    }

    return (
        <div className="flex justify-center items-center">
            <form action={register} className="flex flex-col border-4 border-slsk-blue-dark rounded-md p-2 shadow-md gap-1">
                <h3 className="text-3xl text-center text-bold mb-5">Registrácia</h3>
                <Input label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input label="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {email && password && !validateEmailAddress(email) && <span className="text-red-600 italic text-sm">Neplatná emailová adresa</span>}

                <Input label="Heslo" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input label="Heslo znova" type="password" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />

                {password && passwordRepeat && password != passwordRepeat && <p className="text-red-600 italic text-sm">Heslá nie sú rovanké</p>}

                <button type="submit" className="rounded-md border-2 border-slsk-blue-dark text-slsk-blue-dark hover:bg-slsk-blue-dark hover:text-white transition-all duration-150 text-xl cursor-pointer" disabled={!allowSubmit()}>Registrovať sa</button>
                
                <p className="text-sm">Máte už účet? <a href='/login' className="text-slsk-blue-dark underline">Prihlásiť sa</a></p>

                {errorMsg && <p className="text-red-600 italic text-sm">{errorMsg}</p>}
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

