'use client'
import SearchInput from "../../components/SearchInput";
import Script from "next/script";
import {useQuery, useQueryClient} from "react-query";
import Spinner from "../../components/Spinner";
import {useEffect, useState} from "react";
import {PetApiType} from "../../utils/types/PetApiType";
import AllPetsCards from "../../components/AllPetsCards";

export default function Adopt() {
    const [category, setCategory] = useState<"Dogs" | "Cats" | "All categories">("All categories");
    const [searchPhrase, setSearchPhrase] = useState("");
    const queryClient = useQueryClient()
    const fetchPets = async () => {
        const res = await fetch("petApi.json");
        return res.json();
    }

    const {data, isLoading, error} = useQuery("pets", fetchPets);

    const filteredPets = data?.filter((pet: PetApiType) => {
        if (category === "All categories") {
            return pet.breed.toLowerCase().includes(searchPhrase.toLowerCase());
        } else {
            return pet.breed.toLowerCase().includes(searchPhrase.toLowerCase()) && pet.category === category;
        }
    })

    useEffect(() => {
        window.addEventListener("storage", () => {
            queryClient.invalidateQueries("pets");
        })

        return () => {
            window.removeEventListener("storage", () => {
                queryClient.invalidateQueries("pets");
            })
        }
    }, [])

    return (
        <>
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"/>
            <div className="px-4">
                <h1 className="text-4xl font-bold my-6">Search and adopt pupils</h1>
                <SearchInput category={category} setCategory={setCategory} setSearchPhrase={setSearchPhrase}/>
                {error ? <div>Something went wrong</div>
                    : isLoading ? <Spinner/>
                        : filteredPets?.length === 0 ? <div className="px-4">No pets found</div>
                            : <AllPetsCards pets={filteredPets}/>
                }
            </div>
        </>
    )
}
