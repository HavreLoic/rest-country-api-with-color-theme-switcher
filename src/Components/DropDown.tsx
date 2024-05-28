import { useContext } from "react";
import { RegionNameType, SearchTermContextType, optionType } from "../app-type";
import { RegionNameContext, SearchContext } from "../Context";

interface DropDownProps {
    dropDownTitle: string;
    options: optionType[];
    className?: string;
}

export const DropDown = ({ dropDownTitle, options, className }: DropDownProps) => {
    const { changeRegionName } = useContext(RegionNameContext) as RegionNameType;
    const { changeSearchTerm } = useContext(SearchContext) as SearchTermContextType;

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeRegionName(e.target.value);
        changeSearchTerm("");
    }

    return (
        <div>
            <select className={`bg-white border border-white text-dark-blue text-sm rounded-md focus:ring-dark-blue focus:border-dark-blue block w-full p-2.5 dark:placeholder-gray-400 dark:text-white ${className && className}`}
                onChange={onChange}
            >
                <option value="">{dropDownTitle}</option>
                {options.map((optionItem, index: number) => <option key={index} value={optionItem.value}>{optionItem.option}</option>)}
            </select>
        </div>
    )
}