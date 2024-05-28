import { useContext } from "react"
import { CountryInfoSummaryContainer, DropDown, SearchBar, } from "../Components"
import { continents } from "../Data"
import { SearchContext } from "../Context"
import { SearchTermContextType } from "../app-type"

export const Home = () => {
    const { searchTerm, changeSearchTerm } = useContext(SearchContext) as SearchTermContextType;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSearchTerm(e.target.value);
    }

    return (
        <div className="bg-very-light-gray">
            <div className="md:flex md:justify-between xs:block p-5">
                <SearchBar
                    type="text"
                    value={searchTerm}
                    placeholder="Search for a country..."
                    className="ml-5 p-1"
                    onChange={onChange}
                />
                <DropDown dropDownTitle="Filter by Region" options={continents} />
            </div>

            <CountryInfoSummaryContainer />
        </div>
    )
}

export default Home