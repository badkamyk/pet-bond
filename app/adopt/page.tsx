'use client'
import SearchInput from "../../components/SearchInput";
import Script from "next/script";
export default function Adopt() {
    return (
        <>
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            <div className="px-4">
                <h1 className="text-4xl font-bold my-6">Search and adopt pupils</h1>
                <SearchInput/>
            </div>
        </>
    )
}
