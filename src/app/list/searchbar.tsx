"use client";

import { useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<string>(
        searchParams.get("q")?.toString() ?? "",
    );

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget);
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set("q", query);
        } else {
            params.delete("q");
        }
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="align-content-center mt-2 mr-12 ml-10 flex h-10 items-center rounded-3xl border-1 border-2 border-black px-3">
            <form onSubmit={handleSubmit} className="flex w-full">
                <input
                    name="query"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    type="text"
                    className="stretch font-xl w-full pl-4 font-bold focus:outline-0"
                    placeholder="Hľadať..."
                />
                {/* <button type="submit" className="justify-self-end pr-1 pl-2 font-bold">&#8629;</button> */}
                <button type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-0 ml-0 h-6 w-6 cursor-pointer text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                {/* <div className="w-[1px] bg-black h-7 self-center mx-2"></div> */}
            </form>
        </div>
    );
}
