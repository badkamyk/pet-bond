'use client'
import AllPetsCards from "../../components/AllPetsCards";
export default function Favorites() {
    const petInLocalStorage = Object.keys(localStorage).filter(key => key.includes("pet-"));
    const pets = petInLocalStorage.map(key => JSON.parse(localStorage.getItem(key) || ""));
    return (
        <>
            <h1 className="text-4xl font-bold my-6">Favorites</h1>
            {pets.length > 0 ? <AllPetsCards pets={pets}/> : <div className="px-4">No favorites yet</div>}
        </>
    )
}
