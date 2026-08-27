export function Navbar() {
    const linkStyle =
        "cursor-pointer hover:text-slsk-yellow transition-colors duration-100";
    return (
        <div className="bg-slsk-blue-dark flex h-16 items-center gap-5 rounded-2xl p-2 px-4 font-bold text-white">
            <a href="/" className="content-center">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="size-13 flex-none rounded-full bg-white p-1"
                />
            </a>
            <div className="flex items-center gap-5">
                <a href="/list" className={linkStyle}>
                    Aktivity
                </a>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className={linkStyle}
                >
                    REZNE ZDARMA
                </a>
            </div>
        </div>
    );
}
