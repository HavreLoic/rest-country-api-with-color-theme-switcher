import { optionType } from "../app-type";

interface DropDownProps {
    dropDownTitle: string;
    options: optionType[];
}

export const DropDown = ({ dropDownTitle, options }: DropDownProps) => {
    return (
        <div>
            <select className="bg-white border border-white text-dark-blue text-sm rounded-sm focus:ring-dark-blue focus:border-dark-blue block w-full p-2.5 dark:placeholder-gray-400 dark:text-white">
                <option value="">{dropDownTitle}</option>
                {options.map(optionItem => <option value={optionItem.value}>{optionItem.option}</option>)}
            </select>
        </div>
    )
}