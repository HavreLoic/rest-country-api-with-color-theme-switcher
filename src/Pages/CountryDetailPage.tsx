import { CountryDetailContainer } from "../Components"

export const CountryDetailPage = () => {
    const backArrow = "assets/icons/back-arrow.svg";
    return (
        <>
            <div>
                <img src={backArrow} alt="back arrow" />
            </div>
            <CountryDetailContainer />
        </>
    )
}
