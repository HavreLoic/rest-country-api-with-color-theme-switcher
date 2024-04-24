import { Link } from "react-router-dom"
import { CountryNameContextType, countriesInfoSummaryType } from "../app-type"
import { useContext } from "react";
import { CountryNameContext } from "../Context";

export const CountryInfoSummary = ({ name, population, region, capital, flags }: countriesInfoSummaryType) => {
    const { changeCountry } = useContext(CountryNameContext) as CountryNameContextType;

    return (
        <Link to={`/${name.common}`} onClick={() => changeCountry(name.common)}>
            <div>
                <img className="w-full h-[200px] object-cover rounded-t-[5px]" src={flags.png} alt={name.official} />
            </div>
            <div className="p-6 bg-white rounded-b-[5px]">
                <p className="font-extrabold text-[1.125rem]">{name.official}</p>
                <p><b>Population : </b>{population}</p>
                <p><b>Region : </b>{region}</p>
                <p><b>Capital : </b>{capital}</p>
            </div>
        </Link>
    )
}
