export function Navbar() {
    const linkStyle = "cursor-pointer hover:text-slsk-yellow transition-colors duration-100"
    return (
        <div
            className="flex gap-5 bg-slsk-blue-dark text-white font-bold h-16 rounded-2xl p-2 px-4 items-center"
        >
            <a href="/" className="content-center">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="flex-none size-13 bg-white rounded-full p-1"
                />
            </a>
            <div className="flex items-center gap-5">
                <a href="/list" className={linkStyle}>
                    Aktivity
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={linkStyle}>
                    REZNE ZDARMA
                </a>
            </div>
        </div>
    );
}
