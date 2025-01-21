//importando createContext para criar o contexto
import { createContext, useState } from 'react'

import React from 'react'

export const ThemeContext = createContext();


export const ThemeProvider = ( {children}: any ) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    } 

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}