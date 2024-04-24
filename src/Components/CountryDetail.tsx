import { countriesDetailType } from "../app-type"

export const CountryDetail = ({
    name,
    population,
    region,
    capital,
    flags,
    borderCountries,
    currencies,
    languages,
    subRegion,
    topLevelDomain
}: countriesDetailType) => {
    return (
        <div>
            <div>
                <img src={flags.png} alt={name.official} />
            </div>

            <div>
                <p className="font-extrabold text-[1.125rem]">{name.official}</p>
                <div>
                    <div>
                        <p><b>Native name : </b>{name.nativeName.common}</p>
                        <p><b>Population : </b>{population}</p>
                        <p><b>Region : </b>{region}</p>
                        <p><b>Sub Region : </b>{subRegion}</p>
                        <p><b>Capital : </b>{capital}</p>
                    </div>

                    <div>
                        <p><b>Total Level Domain : </b>{topLevelDomain}</p>
                        <p><b>Currencies : </b>{currencies.name}</p>
                        <p><b>Languages : </b>{Object.entries(languages).map(([code, name]) => (
                            <p key={code}>{name}</p>
                        ))}</p>
                    </div>
                </div>
            </div>

            <div>
                <b>Border Countries : </b>{borderCountries ? borderCountries?.map(border => <p key={border}>{border}</p>) : ""}
            </div>
        </div>
    )
}
