import { useContext } from "react";
import { useDebounce, useFetch } from "../Hooks";
import { RegionNameType, SearchTermContextType, countriesInfoSummaryType } from "../app-type";
import { CountryInfoSummary } from "./CountryInfoSummary";
import { RegionNameContext, SearchContext } from "../Context";
import { numberWithCommas } from "../utils";

export const CountryInfoSummaryContainer = () => {
    const { searchTerm } = useContext(SearchContext) as SearchTermContextType;
    const { regionName } = useContext(RegionNameContext) as RegionNameType;
    const debouncedValue = useDebounce(searchTerm, 1000);

    let countryToShow = "";

    if (regionName.length > 1) {
        countryToShow = `https://restcountries.com/v3.1/region/${regionName}`;
    } else if (debouncedValue.length < 1) {
        countryToShow = "https://restcountries.com/v3.1/all";
    } else {
        countryToShow = `https://restcountries.com/v3.1/name/${debouncedValue}`;
    }

    // const countryToShow = regionName.length > 1 && `https://restcountries.com/v3.1/region/${regionName}` || debouncedValue.length < 1 ? "https://restcountries.com/v3.1/all" : `https://restcountries.com/v3.1/name/${debouncedValue}`;
    console.log("regionName ", regionName);

    console.log(countryToShow);

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
