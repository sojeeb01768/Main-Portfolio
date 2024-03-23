import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Expertise = () => {
    const { isDarkMode } = useTheme();
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        // Fetch skills data from JSON file
        const fetchSkillsData = async () => {
            try {
                const response = await fetch('skills.json'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch skills data');
                }
                const data = await response.json();
                setSkillsData(data);
            } catch (error) {
                console.error('Error fetching skills data:', error);
            }
        };

        fetchSkillsData();
    }, []);


    return (
        <div className={` h-full lg:h-screen lg:w-[770px] mt-[470px] lg:mt-0 mx-5 lg:mx-0 ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className='text-2xl text-center font-bold mt-5'>My Expertise</h1>
            <div>
                <div className='flex items-center my-10 gap-5 '>
                    <h1 className="text-xl font-bold">Front end</h1>
                    <hr className='hidden lg:block border-collapse border-dashed border-slate-500 w-60 lg:w-[640px]' />
                </div>
                <div>
                    <ul>
                        {skillsData?.find(category => category?.category === "front_end")?.technologies?.map(tech => (
                            <li key={tech.name}>{tech?.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex items-center my-10 gap-5 '>
                    <h1 className="text-xl font-bold">Back End</h1>
                    <hr className='hidden lg:block border-collapse border-dashed border-slate-500 w-60 lg:w-[660px]' />
                </div>
                <div>
                    <ul>
                        {skillsData?.find(category => category?.category === "back_end")?.technologies?.map(tech => (
                            <li key={tech.name}>{tech?.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex items-center my-10 gap-5 '>
                    <h1 className="text-xl font-bold">Database</h1>
                    <hr className='hidden lg:block border-collapse border-dashed border-slate-500 w-60 lg:w-[660px]' />
                </div>
                <div>
                    <ul>
                        {skillsData?.find(category => category?.category === "database")?.technologies?.map(tech => (
                            <li key={tech.name}>{tech?.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Expertise;