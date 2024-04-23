import { CountryInfoSummaryContainer, DropDown, SearchBar, } from "../Components"
import { continents } from "../Data"
const Home = () => {
    return (
        <>
            <div className="md:flex md:justify-between xs:block p-5">
                <SearchBar type="text" placeholder="Search for a country..." />
                <DropDown dropDownTitle="Filter by Region" options={continents} />
            </div>

            <CountryInfoSummaryContainer />
        </>
    )
}

export default Home