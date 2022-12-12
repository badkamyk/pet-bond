'use client'
import SearchInput from "../../components/SearchInput";
import Script from "next/script";
import {QueryClientProvider, QueryClient, useQuery, useQueryClient} from "react-query";
import Spinner from "../../components/Spinner";
import {useState} from "react";
import {PetApiType} from "../../utils/types/PetApiType";

// const queryClient = new QueryClient()
export default function Adopt() {
    const [category, setCategory] = useState<"Dogs" | "Cats" | "All categories">("All categories");
    const [searchPhrase, setSearchPhrase] = useState("");
    const queryClient = useQueryClient()
    const fetchPets = async () => {
        const res = await fetch("petApi.json");
        return res.json();
    }

    const {data, isLoading, error} = useQuery("pets", fetchPets);

    return (
        <>
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"/>
            <div className="px-4">
                <h1 className="text-4xl font-bold my-6">Search and adopt pupils</h1>
                <SearchInput category={category} setCategory={setCategory} setSearchPhrase={setSearchPhrase}/>
                {error ? <div>Something went wrong</div>
                    : isLoading ? <Spinner/>
                    : data?.map((pet: PetApiType) => (
                        <div key={pet.id}>
                            <h2>{pet.name}</h2>
                            <p>{pet.description}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}
