import { createContext, useState } from "react";
import { RegionNameType } from "../app-type";


export const RegionNameContext = createContext<RegionNameType | null>(null);

export const RegionNameProvider = ({ children }: { children: JSX.Element }) => {
    const [regionName, setRegionName] = useState("");

    const changeRegionName = (name: string) => {
        setRegionName(name);
    }

    return (
        <RegionNameContext.Provider value={{ regionName, changeRegionName }}>
            {children}
        </RegionNameContext.Provider>
    )
}