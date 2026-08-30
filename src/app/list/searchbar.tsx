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
            className="align-center mt-2 mr-12 ml-10 flex h-10 items-center rounded-3xl border-1 border-2 border-r-0 border-black py-0 pl-3"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-0 ml-0 h-6 w-6 cursor-pointer text-xl font-bold text-black"
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
                className="stretch font-xl w-full pl-3 font-bold focus:outline-0"
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
                    className="mx-2 cursor-pointer text-gray-500"
                >
                    &#10006;
                </button>
            )}
            <button className="h-10 w-20 flex-none cursor-pointer rounded-r-3xl border-2 bg-[#aaa] pr-2 pl-2">
                Search
            </button>
            {/* <div className="w-[1px] bg-black h-7 self-center mx-2"></div> */}
        </form>
    );
}
