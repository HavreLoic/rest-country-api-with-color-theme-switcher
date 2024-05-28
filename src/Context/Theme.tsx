import React, { createContext, useState } from 'react'
import { ThemeContextType } from '../app-type';

export const ThemeContext = createContext<ThemeContextType | string>('');

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light-mode");

    const changeTheme = (name: string) => {
        setTheme(name === 'light-mode' ? 'dark-mode' : 'light-mode');
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
