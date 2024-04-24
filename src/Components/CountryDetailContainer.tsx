import { useContext } from "react"
import { useFetch } from "../Hooks"
import { CountryNameContextType, countriesDetailType } from "../app-type"
import { CountryDetail } from "./CountryDetail"
import { CountryNameContext } from "../Context"

export const CountryDetailContainer = () => {
    const { countryName } = useContext(CountryNameContext) as CountryNameContextType;
    const data: countriesDetailType[] = useFetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`) // ${country}

    return (
        <div>
            {data.map(country => (
                <CountryDetail
                    key={country.name.official}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flags={country.flags}
                    borderCountries={country.borderCountries}
                    currencies={country.currencies}
                    languages={country.languages}
                    subRegion={country.subRegion}
                    topLevelDomain={country.topLevelDomain}
                />
            ))}
        </div>
    )
}
