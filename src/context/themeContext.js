import { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to provide the theme context to its children
export const ThemeProvider = ({ children }) => {
    // State to hold the current theme, default is 'light'
    const [theme, setTheme] = useState('light');

    // useEffect to load the saved theme from localStorage when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // useEffect to save the current theme to localStorage and set the data-theme attribute on the document element
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Function to toggle the theme between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide the theme and toggleTheme function to the context
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);