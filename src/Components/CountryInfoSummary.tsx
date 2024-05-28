import { Link } from "react-router-dom"
import { CountryNameContextType, ThemeContextType, countriesInfoSummaryType } from "../app-type"
import { useContext } from "react";
import { CountryNameContext, ThemeContext } from "../Context";
import { darkModeThemeCard, lightModeThemeCard } from "../global";

export const CountryInfoSummary = ({ name, population, region, capital, flags }: countriesInfoSummaryType) => {
    const { changeCountry } = useContext(CountryNameContext) as CountryNameContextType;
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <Link to={`/${name.common}`} onClick={() => changeCountry(name.common)}>
            <div>
                <img className="w-full h-[200px] object-cover rounded-t-[5px]" src={flags.png} alt={name.official} />
            </div>
            <div className={`${theme === "light-mode" ? lightModeThemeCard : darkModeThemeCard} p-6 rounded-b-[5px]`}>
                <p className="font-extrabold text-[1.125rem]">{name.official}</p>
                <p><b>Population : </b>{population}</p>
                <p><b>Region : </b>{region}</p>
                <p><b>Capital : </b>{capital}</p>
            </div>
        </Link>
    )
}
