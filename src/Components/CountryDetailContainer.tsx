import { useContext } from "react"
import { useFetch } from "../Hooks"
import { CountryNameContextType, countriesDetailType } from "../app-type"
import { CountryDetail } from "./CountryDetail"
import { CountryNameContext } from "../Context"

export const CountryDetailContainer = () => {
    const { countryName } = useContext(CountryNameContext) as CountryNameContextType;
    const data: countriesDetailType[] = useFetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)

    return (
        <div>
            {data.map(country => {
                console.log(country)
                return (
                    <CountryDetail
                        key={country.name.official}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        flags={country.flags}
                        borders={country.borders}
                        currencies={country.currencies}
                        languages={country.languages}
                        subregion={country.subregion}
                        tld={country.tld}
                    />
                )
            })}
        </div>
    )
}
