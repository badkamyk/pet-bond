import React from "react";

export type SearchInputProps = {
    category: "Dogs" | "Cats" | "All categories";
    setCategory: React.Dispatch<React.SetStateAction<"Dogs" | "Cats" | "All categories">>;
    setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
}
