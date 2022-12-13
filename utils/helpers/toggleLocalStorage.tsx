import {PetApiType} from "../types/PetApiType";

export default function toggleLocalStoragePets(petData: Partial<PetApiType>) {
    let currentValue = localStorage.getItem(`pet-${petData.id}`);
    if (!currentValue) {
        localStorage.setItem(`pet-${petData.id}`, JSON.stringify(petData));
    } else {
        localStorage.removeItem(`pet-${petData.id}`);
    }
    window.dispatchEvent(new Event("storage"));
}
