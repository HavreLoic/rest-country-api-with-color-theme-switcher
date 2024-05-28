import { createContext, useState } from "react";
import { SearchTermContextType } from "../app-type";

export const SearchContext = createContext<SearchTermContextType | string>("");

export const SearchProvider = ({ children }: { children: JSX.Element }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const changeSearchTerm = (term: string) => {
        setSearchTerm(term);
    }

    return (
        <SearchContext.Provider value={{ searchTerm, changeSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}