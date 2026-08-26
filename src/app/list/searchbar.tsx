"use client";

import { useState, type ReactNode } from "react";
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
            params.set('q', query_);
        } else {
            params.delete("q");
        }
        router.push(`?${params.toString()}`);
    }

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        handleSearch(query);
    }
        
    return <form onSubmit={handleSubmit} className="border-1 mt-2 ml-10 mr-12 h-10 border-black border-2 border-r-0 rounded-3xl flex pl-3 py-0 align-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-0 mr-0 text-black cursor-pointer font-bold text-xl"
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
                onChange={(e)=>{setQuery(e.target.value)}} 
                type="text" 
                className="stretch w-full focus:outline-0 font-bold font-xl pl-3" 
                placeholder="Hľadať..."
            />
            {/* <button type="submit" className="justify-self-end pr-1 pl-2 font-bold">&#8629;</button> */}
            { query != '' &&
                <button type='button' onClick={(e)=>{setQuery(''); handleSearch('')}} className="text-gray-500 mx-2 cursor-pointer">
                    &#10006;
                </button>
            }
            <button className="bg-[#aaa] flex-none h-10 w-20 border-2 rounded-r-3xl pr-2 pl-2 cursor-pointer">
                Search
            </button>
            {/* <div className="w-[1px] bg-black h-7 self-center mx-2"></div> */}
        </form>
}
