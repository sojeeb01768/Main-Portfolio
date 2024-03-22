import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Home = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={` h-screen  ${isDarkMode ? 'dark' : 'light'}`}>
            hgggg
        </div>
    );
};

export default Home;