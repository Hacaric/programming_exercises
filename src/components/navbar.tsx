
export function Navbar() {
    const LOGO_SIZE: number = 45;
    const CENTER_NAVBAR: boolean = false;

    return <div className={`static bg-red-100 border-1 rounded-xl m-2 mx-3 flex ${CENTER_NAVBAR && 'place-content-center'} pl-5 pr-10 py-0 h-14`}>
        <a href="/" className="content-center">
            <img src="/logo.png" alt="Logo" width={LOGO_SIZE} height={LOGO_SIZE} className="flex-none" />
        </a>
        <div className="flex items-center">
            <div className="h-[70%] w-[1px] bg-black mx-5"></div>
        </div>
        <div className="flex items-center gap-5">
            <a href="/" className="navbar_link">Domov</a>
            <a href="/list" className="navbar_link">Aktivity</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">REZNE ZDARMA</a>
        </div>
    </div>
}







