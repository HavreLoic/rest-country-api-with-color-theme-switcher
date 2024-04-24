import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface SearchBarInterface extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const SearchBar = (props: SearchBarInterface) => {
    const searchLoop = "assets/icons/search-loop.svg";
    const searchBarProps = { ...props };
    return (
        <div className="flex xs:mb-7 md:mb-0 bg-white rounded-md p-3">
            <img src={searchLoop} alt="search glass" />
            <input {...searchBarProps} />
        </div>
    )
}