"use client"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()

    // useEffect(() => {
    //     // Check if there's a theme preference in localStorage, otherwise use browser's preference
    //     const storedTheme = localStorage.getItem('theme');
    //     if (storedTheme) {
    //         setTheme(storedTheme);
    //         if (storedTheme === 'dark') {
    //             document.documentElement.classList.add('dark');
    //         }
    //     } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         setTheme('dark');
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // }, []);

    const handleLightMode = () => {
        setTheme('light');
    };

    const handleDarkMode = () => {
        setTheme('dark');
    };

    return { theme, handleLightMode, handleDarkMode };
};

export default ThemeSwitch;
