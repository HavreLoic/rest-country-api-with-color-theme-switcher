import { useContext } from "react";
import { useDebounce, useFetch } from "../Hooks";
import { SearchTermContextType, countriesInfoSummaryType } from "../app-type";
import { CountryInfoSummary } from "./CountryInfoSummary";
import { SearchContext } from "../Context";
import { numberWithCommas } from "../utils";

export const CountryInfoSummaryContainer = () => {
    const { searchTerm } = useContext(SearchContext) as SearchTermContextType;
    const debouncedValue = useDebounce(searchTerm, 1000);

    const countryToShow = debouncedValue.length < 1 ? "https://restcountries.com/v3.1/all" : `https://restcountries.com/v3.1/name/${debouncedValue}`;

    const data: countriesInfoSummaryType[] = useFetch(countryToShow)

    return (
        <div className="p-5 grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.map(country => (
                <CountryInfoSummary
                    key={country.name.official}
                    capital={country.capital}
                    flags={country.flags}
                    name={country.name}
                    population={numberWithCommas(country.population)}
                    region={country.region}
                />
            ))}
        </div>
    )
}
