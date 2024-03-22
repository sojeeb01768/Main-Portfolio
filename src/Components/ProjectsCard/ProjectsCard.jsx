import React from 'react';
import image from '../../assets/bg1.jpg';
import { useTheme } from '../../Provider/ThemeContext';

const ProjectsCard = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={isDarkMode ? "w-full mx-auto primary-bg shadow-md overflow-hidden rounded-lg" : "w-full mx-auto bg-gray-200  shadow-md overflow-hidden rounded-lg"}>
            <div className="relative h-40">
                <img
                    className="object-cover w-full h-full"
                    src={image}
                    alt="Project"
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Project Title</h2>
                <div className="flex justify-between items-center mt-5">
                    <button className="px-4 py-2 primary-text  focus:outline-none focus:bg-blue-600">Live</button>
                    <p className='text-2xl'>|</p>
                    <button className="px-4 py-2 primary-text  focus:outline-none focus:bg-green-600">Code</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
