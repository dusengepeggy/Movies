import React, { createContext, useState } from "react";
export const DarkMode = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    const changeMode =async () => {
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", !darkMode);
    }
    return (
        <DarkMode.Provider value={{ darkMode, changeMode}}>
            {children}
        </DarkMode.Provider>
    )


}