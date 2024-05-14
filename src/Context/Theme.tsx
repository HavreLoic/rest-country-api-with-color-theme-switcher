import { createContext, useState } from 'react'
import { ThemeContextType } from '../app-type';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
    const [theme, setTheme] = useState('');

    const changeTheme = (name: string) => {

        if (name === 'light-mode') {
            setTheme('dark-mode');

        } else if (name === 'dark-mode') {
            setTheme('light-mode')
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
