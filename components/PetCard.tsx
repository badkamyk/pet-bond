import Image from "next/image";
import {PetApiType} from "../utils/types/PetApiType";
import toggleLocalStoragePets from "../utils/helpers/toggleLocalStorage";
import checkIfInLocalStorage from "../utils/helpers/checkLocalStorage";

export default function PetCard({id, name, age, breed, description, image}: PetApiType) {
    const isFavourite = checkIfInLocalStorage(id);
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl hover:bg-gray-200">
            <Image className="object-cover object-center w-full h-56"
                   src={image}
                   height={300}
                   width={300}
                   alt="avatar"/>

            <div className="flex items-center px-6 py-3 bg-gray-900 hover:cursor-pointer hover:bg-green-500"
                 onClick={() => toggleLocalStoragePets({id, name, age, breed, description, image})}>
                <svg className={`w-6 h-6 text-gray-100 ${isFavourite ? "fill-red-500" : "fill-current"}`} viewBox="0 0 24 24">
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <h1 className="mx-3 text-lg font-semibold text-white">{isFavourite ? "Remove from favorites" : "Add to favorites"}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/>
                    </svg>
                    <h1 className="px-2 text-sm">{age}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>

                    <h1 className="px-2 text-sm">{breed}</h1>
                </div>
            </div>
        </div>
    )
}
