'use client'
import AllPetsCards from "../../components/AllPetsCards";
import {useEffect, useState} from "react";
import {PetApiType} from "../../utils/types/PetApiType";

export default function Favorites() {
    const filterPets = Object.keys(localStorage).filter(key => key.includes("pet-"));
    const getPets = filterPets.map(key => JSON.parse(localStorage.getItem(key) || ""));
    const [pets, setPets] = useState<PetApiType[]>(getPets);

    function checkForChanges() {
        const petInLocalStorage = Object.keys(localStorage).filter(key => key.includes("pet-"));
        const savedPets = petInLocalStorage.map(key => JSON.parse(localStorage.getItem(key) || ""));
        setPets(savedPets);
    }

    useEffect(() => {
        window.addEventListener(("storage"), () => {
            checkForChanges();
        })
        return () => {
            window.removeEventListener(("storage"), () => {
                checkForChanges();
            })
        }
    }, [])
    return (
        <>
            <h1 className="text-4xl font-bold my-6 px-3">Favorites</h1>
            {pets.length > 0 ? <AllPetsCards pets={pets}/> : <div className="px-4">No favorites yet</div>}
        </>
    )
}
