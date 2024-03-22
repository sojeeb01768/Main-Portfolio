import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Projects = () => {
    const { isDarkMode} = useTheme()

    return (
        <div  className={` h-full lg:h-screen ${isDarkMode ? 'dark' : 'light'}`}>
            this is projects
        </div>
    );
};

export default Projects;