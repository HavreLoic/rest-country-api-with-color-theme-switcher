import { useContext } from "react";
import { ThemeContext } from "../Context";
import { ThemeContextType } from "../app-type";

export const TopBar = () => {
    const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
    const MoonIcon = 'assets/icons/moon.svg';

    return (
        <div data-testid="top-bar" className={`flex justify-between p-5 shadow-sm items-center ${theme}`}>
            <p className='font-extrabold text-xl'>Where in the world?</p>
            <div className='flex' onClick={() => changeTheme(theme)}>
                <img src={MoonIcon} alt="moon" className='w-5 mr-2 bg-white cursor-pointer' />
                <p className='font-semibold'>Dark Mode</p>
            </div>
        </div>
    )
}
