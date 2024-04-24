import { createContext, useState } from "react";
import { CountryNameContextType } from "../app-type";


export const CountryNameContext = createContext<CountryNameContextType | null>(null);

export const CountryNameProvider = ({ children }: { children: JSX.Element }) => {
    const [countryName, setCountryName] = useState("");

    const changeCountry = (name: string) => {
        setCountryName(name);
    }

    return (
        <CountryNameContext.Provider value={{ countryName, changeCountry }}>
            {children}
        </CountryNameContext.Provider>
    )
}