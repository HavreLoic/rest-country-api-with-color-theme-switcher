import { useContext } from "react"
import { CountryInfoSummaryContainer, DropDown, SearchBar, } from "../Components"
import { continents } from "../Data"
import { SearchContext, ThemeContext } from "../Context"
import { SearchTermContextType, ThemeContextType } from "../app-type"
import { darkModeThemeBackGround, darkModeThemeCard, lightModeThemeBackGround, lightModeThemeCard } from "../global"

export const Home = () => {
    const { searchTerm, changeSearchTerm } = useContext(SearchContext) as SearchTermContextType;
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSearchTerm(e.target.value);
    }

    return (
        <div className={`${theme === "light-mode" ? lightModeThemeBackGround : darkModeThemeBackGround}`}>
            <div className="md:flex md:justify-between xs:block p-5">
                <SearchBar
                    type="text"
                    value={searchTerm}
                    placeholder="Search for a country..."
                    className={`ml-5 p-1 ${theme === "light-mode" ? lightModeThemeCard : darkModeThemeCard}`}
                    onChange={onChange}
                />
                <DropDown dropDownTitle="Filter by Region" options={continents} className={`${theme === "light-mode" ? lightModeThemeCard : darkModeThemeCard}`} />
            </div>

            <CountryInfoSummaryContainer />
        </div>
    )
}

export default Home