'use client'
import { useState } from "react";
import { signUp } from "~/lib/auth";

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmailAddress(email: string): boolean {
    return emailRegex.test(email);
}


export default function RegisterPage() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");

    async function register() {
        const {data, error} = await signUp({name: username, username: username, email: email, password: password});
        alert(`Data: ${JSON.stringify(data)}, Error: ${JSON.stringify(error)}`);
    }

    function allowSend(): boolean {
        if (!username) return false;
        if (!email || !validateEmailAddress(email)) return false;
        if (!password || password!=passwordRepeat) return false;
        return true;
    }

    return <div className="justify-content-center">
        Registrácia:
        <form action={register}>
            <p>Username: <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border-2" /></p>
            <p>Email: <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2" /></p>
            {email && !validateEmailAddress(email) && <p className="text-red-600 italic text-sm">Neplatná emailová adresa</p>}

            <p>Heslo: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2" /></p>
            <p>Heslo (znova): <input type="password" name="password_repeat" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} className="border-2" /></p>
            {password && password!=passwordRepeat && <p className="text-red-600 italic text-sm">Heslá nie sú rovanké</p>}

            <button type="submit" className="border-2 border-white bg-black text-white py-1 px-2 rounded-md" style={{"cursor": allowSend() ? "pointer" : "not-allowed"}} disabled={!allowSend()}>Registrovať sa</button>
        </form>
    </div>
}






