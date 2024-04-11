import { TopBar, SearchBar } from "../Components"
const Home = () => {
    return (
        <>
            <TopBar />
            <SearchBar type="text" placeholder="Search for a country..." />
        </>
    )
}

export default Home