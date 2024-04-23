import { countriesInfoSummaryType } from "../app-type"

export const CountryInfoSummary = ({ name, population, region, capital, flags }: countriesInfoSummaryType) => {
    return (
        <div>
            <div>
                <img src={flags.png} alt={name.official} />
            </div>
            <div>
                <p>{name.official}</p>
                <p>Population<b> : </b>{population}</p>
                <p>Region<b> : </b>{region}</p>
                <p>Capital<b> : {capital}</b></p>
            </div>
        </div>
    )
}
