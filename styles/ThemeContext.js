import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, colorblindTheme } from './NewStyles';

// Create a context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(lightTheme);

    useEffect(() => {
        (async () => {
            const savedThemeName = await AsyncStorage.getItem('themeName');
            setSelectedTheme(themesByIdentifier[savedThemeName || 'default']);
        })()
    }, []);

    const themesByIdentifier = {
        'default': lightTheme,
        'light': lightTheme,
        'dark': darkTheme,
        'colorblind': colorblindTheme,
    }

    const toggleTheme = async (themeName) => {
        setSelectedTheme(themesByIdentifier[themeName || 'default']);
        await AsyncStorage.setItem('themeName', themeName); // Persist theme selection
    }; 

    return (
        <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to access the forceUpdate value
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext
