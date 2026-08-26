'use client';

import { useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<string>(searchParams.get('q')?.toString() ?? '')

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        // const formData = new FormData(event.currentTarget);
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set('q', query);
        } else {
            params.delete('q');
        }
        router.push(`?${params.toString()}`);
    }


    return <div className="border-1 mt-2 ml-10 mr-12 h-10 border-black border-2 rounded-3xl flex px-3 align-content-center items-center">
            <form onSubmit={handleSubmit} className="flex w-full">
                <input 
                    name="query" 
                    value={query} 
                    onChange={(e)=>{setQuery(e.target.value)}} 
                    type="text" 
                    className="stretch w-full focus:outline-0 font-bold font-xl pl-4" 
                    placeholder="Hľadať..."
                />
                {/* <button type="submit" className="justify-self-end pr-1 pl-2 font-bold">&#8629;</button> */}
                <button type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-0 mr-0 text-black cursor-pointer"
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
}


