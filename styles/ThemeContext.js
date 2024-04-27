import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, colorblindTheme } from './Styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(lightTheme); // Default to light theme initially

    useEffect(() => {
        const loadTheme = async () => {
            const savedThemeName = await AsyncStorage.getItem('themeName');
            const theme = getThemeFromName(savedThemeName || 'light'); // Default to light if nothing is saved
            setSelectedTheme(theme);
        };
        loadTheme();
    }, []);

    const getThemeFromName = (themeName) => {
        switch (themeName) {
            case 'dark':
                return darkTheme;
            case 'colorblind':
                return colorblindTheme;
            case 'light':
            default:
                return lightTheme;
        }
    };

    const toggleTheme = async (themeName) => {
        const newTheme = getThemeFromName(themeName);
        setSelectedTheme(newTheme);
        await AsyncStorage.setItem('themeName', themeName); // Persist theme selection
    };

    return (
        <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Export the useTheme hook for easy access to the context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;