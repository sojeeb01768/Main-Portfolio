import React from 'react';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import { useTheme } from '../../Provider/ThemeContext';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LatestProjects = () => {
    const { isDarkMode } = useTheme()

    return (
        <div className={` h-full lg:h-screen  ${isDarkMode ? 'dark' : 'light'}`}>
            <div className='flex items-center my-10 gap-5 '>
                <h1 className="text-xl font-bold mx-5">Latest Projects</h1>
                <hr className='hidden lg:block border-collapse border-dashed border-slate-500 w-60 lg:w-[600px]' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 lg:mx-0'>
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
            <Link to='/projects' className='flex justify-center mt-20'>
                <button className='flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-[#70BA65] duration-300  py-2 px-4 rounded-full mr-4 hover:gap-3'>See more <FaArrowRight className='mt-0.5 text-base' /> </button>
            </Link>
        </div>
    );
};

export default LatestProjects;