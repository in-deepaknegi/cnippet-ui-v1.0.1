"use client"
import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // Check if there's a theme preference in localStorage, otherwise use browser's preference
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleLightMode = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
    };

    const handleDarkMode = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
    };

    return { theme, handleLightMode, handleDarkMode };
};

export default useTheme;
