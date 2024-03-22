import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={` h-full lg:h-screen  ${isDarkMode ? 'dark' : 'light'}`}>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;