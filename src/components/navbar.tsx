export function Navbar() {
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
        </div>
    );
}
