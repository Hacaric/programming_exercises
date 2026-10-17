"use client";

import { authClient } from "~/server/better-auth/client";
import type { Session, User } from "better-auth";
import {
    useEffect,
    useRef,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";
import { useRouter } from "next/navigation";
import type { AuthSession } from "~/app/account/page";

async function Logout(session: AuthSession) {
    await authClient.revokeSession(session.session);
}

function DropDownButton(props: {
    username: string;
    dropdownVisible: boolean;
    setDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const {
        username,
        dropdownVisible: open,
        setDropdownVisible: setOpen,
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    // Hey, developer... Yes, you! Are you rewriting handle-click-outside-of-element elsewhere?
    // Consider looking at this (general implementation of detect-click-outside-element or smth idk, go read it): https://stackoverflow.com/a/54570068
    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref.current) {
                if (ref.current.contains(event.target as Node)) {
                    setOpen(!open); // If user clicks the toggle button, toggle
                } else {
                    setOpen(false); // If user clicks outsithe to toggle button, close the dropdown menu
                }
            }
        });

        // ESC key press closes the dropdown menu
        document.body.addEventListener("keydown", (event) => {
            if (event.key == "Escape") {
                setOpen(false);
            }
        });
    });
    return (
        <div ref={ref} className="relative inline-block cursor-pointer px-5">
            {username}
        </div>
    );
}

function DropDownContent(props: {
    authSession: { session: Session; user: User };
}) {
    const { authSession } = props;
    const router = useRouter();

    return (
        <div className="bg-slsk-blue-dark absolute float-left mt-3 grid rounded-xl border-2 p-0">
            <div>
                <a href="/account" className="dropdown_item_first">
                    Account
                </a>
            </div>
            <div>
                <a
                    href="/"
                    className="dropdown_item"
                    onClick={() => alert("TODO")}
                >
                    Nastavenia
                </a>
            </div>
            <div>
                <button
                    className="dropdown_item_last"
                    onClick={async () => {
                        await Logout(authSession);
                        router.push("/");
                        router.refresh(); // Make sure to update the UI
                    }}
                >
                    Odhlásiť sa
                </button>
            </div>
        </div>
    );
}

export function AccountOptions(props: { session: Session; user: User }) {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const { session, user } = props;
    const ref = useRef<HTMLDivElement>(null);

    // Hey, developer... Yes, you! Are you rewriting handle-click-outside-of-element elsewhere?
    // Consider looking at this (general implementation of detect-click-outside-element or smth idk, go read it): https://stackoverflow.com/a/54570068
    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setDropdownVisible(false); // If user clicks outsithe to toggle button, close the dropdown menu
            }
        });

        // ESC key press closes the dropdown menu
        document.body.addEventListener("keydown", (event) => {
            if (event.key == "Escape") {
                setDropdownVisible(false);
            }
        });
    });
    return (
        <div className="inline-block" ref={ref}>
            <div
                className="relative inline-block cursor-pointer px-5"
                onClick={() => setDropdownVisible(!dropdownVisible)}
            >
                {user.name}
            </div>
            {dropdownVisible && (
                <DropDownContent authSession={{ session, user }} />
            )}
        </div>
    );
}
