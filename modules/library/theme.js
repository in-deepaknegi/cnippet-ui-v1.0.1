"use client"
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()

    const handleLightMode = () => {
        setTheme('light');
    };

    const handleDarkMode = () => {
        setTheme('dark');
    };

    return { theme, handleLightMode, handleDarkMode };
};

export default ThemeSwitch;
