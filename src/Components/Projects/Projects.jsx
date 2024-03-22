import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import Card from '../ProjectsCard/Card';

const Projects = () => {
    const { isDarkMode } = useTheme();
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(result=>setProjects(result) )
    },[])

    return (
        <div className={` h-full w-full ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className='lg:w-[770px] text-center font-bold text-2xl my-3'>My projects</h1>
            <hr className=' border-collapse border-dashed border-slate-500' />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  lg:w-[770px] mt-[440px] lg:mt-10 mx-5 lg:mx-0'>
                {
                    projects.map(project=><Card key={project.id} project={project}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Projects;