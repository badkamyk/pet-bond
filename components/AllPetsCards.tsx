import PetCard from "./PetCard";
import {PetApiType} from "../utils/types/PetApiType";

export default function AllPetsCards({pets}: {pets: PetApiType[]}) {
    return (
        <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-6">
                {pets.map((pet: PetApiType) => (
                    <PetCard key={pet.id} {...pet}/>
                ))}
            </div>
        </div>
    )
}
