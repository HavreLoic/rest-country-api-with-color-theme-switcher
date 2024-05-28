import { DetailedHTMLProps, InputHTMLAttributes, useContext } from "react";
import { darkModeThemeCard, lightModeThemeCard } from "../global";
import { ThemeContext } from "../Context";
import { ThemeContextType } from "../app-type";

interface SearchBarInterface extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const SearchBar = (props: SearchBarInterface) => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const searchLoop = "assets/icons/search-loop.svg";
    const searchBarProps = { ...props };

    return (
        <div className={`${theme === "light-mode" ? lightModeThemeCard + " bg-white" : darkModeThemeCard} flex xs:mb-7 md:mb-0 rounded-md p-3`}>
            <img src={searchLoop} alt="search glass" className={`${theme === "light-mode" ? " bg-white" : " bg-dark-blue"} cursor-pointer rounded-[5px]`} />
            <input {...searchBarProps} />
        </div>
    )
}