import { countriesInfoSummaryType } from "../app-type"

export const CountryInfoSummary = ({ name, population, region, capital, flags }: countriesInfoSummaryType) => {
    return (
        <div>
            <div className="">
                <img className="w-full h-[200px] object-cover rounded-t-[5px]" src={flags.png} alt={name.official} />
            </div>
            <div className="p-6 bg-white rounded-b-[5px]">
                <p className="font-extrabold text-[1.125rem]">{name.official}</p>
                <p><b>Population : </b>{population}</p>
                <p><b>Region : </b>{region}</p>
                <p><b>Capital : </b>{capital}</p>
            </div>
        </div>
    )
}
