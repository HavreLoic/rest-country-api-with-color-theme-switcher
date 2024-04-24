import { useFetch } from "../Hooks";
import { countriesInfoSummaryType } from "../app-type";
import { CountryInfoSummary } from "./CountryInfoSummary";

export const CountryInfoSummaryContainer = () => {
    const data: countriesInfoSummaryType[] = useFetch("https://restcountries.com/v3.1/all")

    return (
        <div className="p-5 grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.map(country => (
                <CountryInfoSummary
                    key={country.name.official}
                    capital={country.capital}
                    flags={country.flags}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                />
            ))}
        </div>
    )
}
