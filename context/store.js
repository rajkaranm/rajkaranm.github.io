"use client"
import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext({
    theme: "",
    handleThemeSwitch: () => "",
})

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme"); // get the theme from localStorage on initial render

        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const handleThemeSwitch = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Set theme preference in local storage
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);