import { Link } from "react-router-dom";
import { CountryDetailContainer } from "../Components"

export const CountryDetailPage = () => {
    const backArrow = "assets/icons/back-arrow.svg";
    return (
        <div className="p-5">
            <Link to={"/"}>
                <button className="flex items-center p-3 shadow-md rounded-[5px] border-light-gray mb-10">
                    <img src={backArrow} alt="back arrow" />
                    <p className="ml-3">Back</p>
                </button>
            </Link>
            <CountryDetailContainer />
        </div>
    )
}
