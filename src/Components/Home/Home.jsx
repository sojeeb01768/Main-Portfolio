import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import LatestProjects from '../LatestProjects/LatestProjects';

const Home = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={` h-full   ${isDarkMode ? 'dark' : 'light'}`}>
            <AboutMe></AboutMe>
            <Skills />
            <LatestProjects />
        </div>
    );
};

export default Home;