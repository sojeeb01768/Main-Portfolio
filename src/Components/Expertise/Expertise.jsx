import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Expertise = () => {
    const { isDarkMode } = useTheme()

    return (
        <div className={` h-full lg:h-screen ${isDarkMode ? 'dark' : 'light'}`}>
            Thisis dkskdkasdj
        </div>
    );
};

export default Expertise;