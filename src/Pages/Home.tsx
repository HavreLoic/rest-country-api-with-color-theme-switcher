import { CountryInfoSummaryContainer, DropDown, SearchBar, } from "../Components"
import { continents } from "../Data"
export const Home = () => {
    return (
        <div className="bg-very-light-gray">
            <div className="md:flex md:justify-between xs:block p-5">
                <SearchBar type="text" placeholder="Search for a country..." className="ml-5" />
                <DropDown dropDownTitle="Filter by Region" options={continents} />
            </div>

            <CountryInfoSummaryContainer />
        </div>
    )
}

export default Home