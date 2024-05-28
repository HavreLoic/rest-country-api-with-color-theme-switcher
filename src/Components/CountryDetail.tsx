import { useContext } from "react";
import { ThemeContextType, countriesDetailType } from "../app-type"
import { ThemeContext } from "../Context";
import { darkModeThemeBackGround, lightModeThemeBackGround } from "../global";

export const CountryDetail = ({
    name,
    population,
    region,
    capital,
    flags,
    borders,
    currencies,
    languages,
    subregion,
    tld
}: countriesDetailType) => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <div className="md:grid md:grid-cols-2 md:gap-16">
            <div className="xs:mb-10">
                <img src={flags.png} alt={name.official} className="xs:w-full sm:w-[400px] xs:h-[200px] object-cover md:w-full md:h-[60vh]" />
            </div>

            <div className={`md:p-7 ${theme === "light-mode" ? lightModeThemeBackGround : darkModeThemeBackGround}`}>
                <p className="font-extrabold text-[1.125rem] font-sans mb-5">{name.official}</p>
                <div className="md:grid md:grid-cols-2 md:gap-12">
                    <div className={`xs:mb-5`}>
                        <p className="mb-2"><b>Native name: </b>{name.common}</p>
                        <p className="mb-2"><b>Population: </b>{population}</p>
                        <p className="mb-2"><b>Region: </b>{region}</p>
                        <p className="mb-2"><b>Sub Region: </b>{subregion}</p>
                        <p><b>Capital: </b>{capital}</p>
                    </div>

                    <div className="xs:mb-5">
                        <p className="mb-2"><b>Total Level Domain: </b>{tld}</p>
                        <p className="mb-2"><b>Currencies: </b>{Object.keys(currencies)[0]}</p>
                        <p className="flex"><b>Languages: </b>{Object.entries(languages).map(([code, name]) => (
                            <p className="mx-1" key={code}>{name}</p>
                        ))}</p>
                    </div>
                </div>

                <div>
                    <b>Border Countries : </b><div className="grid sm:grid-cols-5 xs:grid-cols-4 gap-4 mt-4">
                        {borders ? (
                            borders.map((border) => (
                                <p key={border} className="shadow-md border-dark-blue p-2">{border}</p>
                            ))
                        ) : (
                            <p>No border countries information available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
