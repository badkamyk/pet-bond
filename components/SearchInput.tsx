'use client'
import {useForm} from "react-hook-form";
import React, {useRef} from "react";
import {SearchInputProps} from "../utils/types/SearchInputProps";


const categories = ["Dogs", "Cats", "All categories"];
export default function SearchInput({
                                        category,
                                        setCategory,
                                        setSearchPhrase,
                                    }: SearchInputProps) {
    const {register, watch} = useForm(
        {
            defaultValues: {
                petCategory: "",
            }
        },
    );
    const {ref, onChange, ...rest} = register('petCategory');

    const inputRef = useRef<HTMLInputElement>(null);
    const changeDropDownText = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const text = button.textContent;
        if (text === "Dogs") {
            setCategory("Dogs");

        } else if (text === "Cats") {
            setCategory("Cats");
        } else {
            setCategory("All categories");
        }
        inputRef?.current?.focus();
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPhrase(e.target.value);
        onChange(e);
    }

    console.log(watch('petCategory'));
    return (
        <form>
            <div className="flex">
                <label htmlFor="search-dropdown"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Type in breed</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">{category}
                    <svg aria-hidden="true" className="w-4 h-4 ml-1"
                         fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div id="dropdown"
                     className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                     data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                     style={{
                         position: "absolute",
                         inset: "auto auto 0px 0px",
                         margin: "0px; transform: translate3d(897px, 5637px, 0px)"
                     }}>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        {categories.map((category) => (
                            <li key={category}>
                                <button onClick={changeDropDownText}
                                        className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600"
                                        type="button">{category}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" {...rest} ref={(e) => {
                        ref(e)
                        // @ts-ignore
                        inputRef.current = e
                    }}
                           onChange={(e) => onInputChange(e)}
                           className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                           placeholder="Type in pet's breed..."/>
                    <div
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </div>
                </div>
            </div>
        </form>
    )
}
