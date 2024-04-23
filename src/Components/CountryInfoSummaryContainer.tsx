import { useFetch } from "../Hooks";
import { countriesInfoSummaryType } from "../app-type";
import { CountryInfoSummary } from "./CountryInfoSummary";

export const CountryInfoSummaryContainer = () => {
    const data: countriesInfoSummaryType[] = useFetch("https://restcountries.com/v3.1/all")
    console.log("data", data)
    return (
        <div className="p-5">
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
