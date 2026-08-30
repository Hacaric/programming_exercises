"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<string>(
        searchParams.get("q")?.toString() ?? "",
    );

    function handleSearch(query_: string) {
        // we need query here, because setQuery(...); handleSearch(), in this case the setQuery is somehow async and is not changed when the handleSearch function is called

        // const formData = new FormData(event.currentTarget);
        const params = new URLSearchParams(searchParams.toString());
        if (query_) {
            params.set("q", query_);
            params.set("q", query_);
        } else {
            params.delete("q");
        }
        router.push(`/search?${params.toString()}`);
    }

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        handleSearch(query);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border-slsk-blue-dark text-slsk-blue-dark flex h-10 items-center gap-2 overflow-hidden rounded-2xl border-2 pl-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 mr-0 ml-0 h-6 w-6 cursor-pointer text-xl font-bold text-black"
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
            <input
                name="query"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                type="text"
                className="font-2xl flex-1 font-semibold outline-none"
                placeholder="Hľadať..."
            />
            {/* <button type="submit" className="justify-self-end pr-1 pl-2 font-bold">&#8629;</button> */}
            {query != "" && (
                <button
                    type="button"
                    onClick={(e) => {
                        setQuery("");
                        handleSearch("");
                    }}
                    className="mx-2 cursor-pointer"
                >
                    &#10006;
                </button>
            )}
            <button className="border-l-slsk-blue-dark hover:bg-slsk-blue-dark h-full cursor-pointer border-l-2 px-4 font-bold transition-all duration-150 hover:text-white">
                Vyhľadať
            </button>
            {/* <div className="w-[1px] bg-black h-7 self-center mx-2"></div> */}
        </form>
    );
}
