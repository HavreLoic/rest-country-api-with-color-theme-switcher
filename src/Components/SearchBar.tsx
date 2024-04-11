import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface SearchBarInterface extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const SearchBar = (props: SearchBarInterface) => {
    const searchLoop = "public/assets/icons/search-loop.svg";
    const searchBarProps = { ...props };
    return (
        <div className="flex">
            <img src={searchLoop} alt="search glass" />
            <input {...searchBarProps} />
        </div>
    )
}