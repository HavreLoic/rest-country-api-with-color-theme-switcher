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
            {/* <div className="p-5">
            <CountryInfoSummary
                    capital="Yaounde"
                    image=""
                    name="Cameroon"
                    population={123456789}
                    region="Africa"
                />
</div> */}
        </>
    )
}

export default Home