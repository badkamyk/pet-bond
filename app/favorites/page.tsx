'use client'
import AllPetsCards from "../../components/AllPetsCards";
import {useEffect, useState} from "react";

export default function Favorites() {
    const petInLocalStorage = Object.keys(localStorage).filter(key => key.includes("pet-"));
    const pets = petInLocalStorage.map(key => JSON.parse(localStorage.getItem(key) || ""));
    const [petInLocalStorageState, setPetInLocalStorageState] = useState(petInLocalStorage);

// rerender on remove from favorites
    useEffect(() => {
        setPetInLocalStorageState(Object.keys(localStorage).filter(key => key.includes("pet-")));
    }, [petInLocalStorageState])

    return (
        <>
            <h1 className="text-4xl font-bold my-6 px-3">Favorites</h1>
            {pets.length > 0 ? <AllPetsCards pets={pets}/> : <div className="px-4">No favorites yet</div>}
        </>
    )
}
