import { Link } from "react-router-dom";
import { CountryDetailContainer } from "../Components"
import { ThemeContextType } from "../app-type";
import { ThemeContext } from "../Context";
import { useContext } from "react";
import { darkModeThemeBackGround, lightModeThemeBackGround } from "../global";

export const CountryDetailPage = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const backArrow = "assets/icons/back-arrow.svg";

    return (
        <div className={`${theme === "light-mode" ? lightModeThemeBackGround : darkModeThemeBackGround} p-5 `}>
            <Link to={"/"} className="block w-max">
                <button className="flex items-center p-3 shadow-md rounded-[5px] border-light-gray mb-10">
                    <img src={backArrow} alt="back arrow" />
                    <p className="ml-3">Back</p>
                </button>
            </Link>
            <CountryDetailContainer />
        </div>
    )
}
