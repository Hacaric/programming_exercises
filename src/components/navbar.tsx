
export function Navbar() {
    const LOGO_SIZE: number = 50;
    const CENTER_NAVBAR: boolean = false;

    return <div className={`static w-[100%] bg-red-100 flex ${CENTER_NAVBAR && 'place-content-center'} pl-5 pr-10 py-2 h-16`}>
        <a href="/" className="">
            <img src="/logo.png" alt="Logo" width={LOGO_SIZE} height={LOGO_SIZE} />
        </a>
        <div className="flex items-center">
            <div className="h-[70%] w-[1px] bg-black mx-7"></div>
        </div>
        <div className="flex items-center gap-5">
            <a href="/" className="navbar_link">Home</a>
            <a href="/activity/list" className="navbar_link">Activity</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">REZNE ZDARMA</a>
        </div>
    </div>
}







