export default function checkIfInLocalStorage(petId: string) {
    let currentValue = localStorage.getItem(`pet-${petId}`);
    return !!currentValue;
}
