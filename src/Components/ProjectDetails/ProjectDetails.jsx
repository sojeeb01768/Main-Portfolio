import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { isDarkMode } = useTheme();
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const D = data.find(detail => detail.id == id)
                if (D) {
                    setDetails(D)
                }
            })
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const { title, image, technology, category, platform, features, live, git, git_server } = details;
    return (
        <div className='m-2 lg:w-[770px] mt-[470px] lg:mt-5'>
            <div>
                <h1 className={isDarkMode ? 'text-3xl text-center lg:text-left md:text-5xl font-bold primary-bg p-5 mb-5 rounded-lg' : 'text-3xl text-center lg:text-left md:text-5xl font-bold bg-gray-200 p-5 mb-5 rounded-lg  '}>{title}</h1>
                {/* Image and other */}
                <div className='md:flex flex-row-reverse justify-between gap-5 text-xs'>
                    <div className='lg:w-11/12'>
                        <img className={isDarkMode ? 'border-collapse border border-slate-500 p-2 border-dashed lg:h-64 rounded-lg' : 'border-collapse border border-slate-500 p-2 border-dashed lg:h-64 rounded-lg'} src={image} alt="" />
                    </div>
                    <div className={isDarkMode ? 'mt-5 md:mt-0 md:w-3/4 primary-bg p-4 rounded-lg' : 'mt-5 md:mt-0 md:w-3/4 bg-gray-200 p-4 rounded-lg'}>
                        <div className='flex justify-between '>
                            <div className={isDarkMode ? 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-600 w-1/2' : 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-200 w-1/2'}>
                                <h1 className='font-bold'>X-Platform:</h1>
                                <h1 className='font-extrabold text-green-500'>{platform}</h1>
                            </div>

                            <div className={isDarkMode ? 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-500 w-1/2 ' : 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-100 w-1/2 '}>
                                <h1 className='font-bold'>Category:</h1>
                                <h1 className='font-extrabold text-green-500'>{category}</h1>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='flex justify-between items-center'>
                                <hr className='w-1/4 border border-zinc-400' />
                                <h1 className=' font-bold uppercase text-center'>Used Technology</h1>
                                <hr className='w-1/4 border border-zinc-400' />
                            </div>
                            <ul className='grid grid-cols-3 gap-2 mt-5'>
                                {Array.isArray(technology) &&
                                    technology.map((tech, index) => (
                                        <li
                                            key={index}
                                            className={
                                                isDarkMode
                                                    ? 'bg-zinc-700 flex justify-center p-1'
                                                    : 'bg-zinc-100 flex justify-center p-1'
                                            }
                                        >
                                            {tech.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold'>Features</h1>
                    <div className='mt-5'>
                        <div className="w-full">
                            {Array.isArray(features) &&
                                features.map((feature, index) => (
                                    <div key={index} className="mb-2">
                                        <div
                                            className={`select-none flex justify-between p-4 cursor-pointer bg-zinc-500/80 ${activeIndex === index ? 'text-xl ' : ''
                                                }`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className="font-semibold text-white">{feature.title}</span>
                                            <svg
                                                className={`w-4 h-4 text-white transition-transform transform ${activeIndex === index ? 'rotate-180' : ''
                                                    }`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="p-4 ">
                                                <p className="select-none">{feature.content}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div className='lg:flex  lg:space-x-5 mt-10 '>
                    <a href={live} target='blank'>
                        <button className="w-full text-xs font-bold tracking-[3px] uppercase bg-[#70BA65] hover:bg-[#5e9c53] duration-300 text-white py-2 px-4 rounded-full mr-4">
                            Live
                        </button>
                    </a>
                    <a href={git} target='blank'>
                        <button className="w-full text-xs font-bold tracking-[3px] uppercase bg-[#70BA65] hover:bg-[#5e9c53] duration-300 text-white py-2 px-4 rounded-full mr-4 mt-3 lg:mt-0 ">
                            Code
                        </button>
                    </a>
                    <a href={git_server} target='blank'>
                        <button className="w-full text-xs font-bold tracking-[3px] uppercase bg-[#70BA65] hover:bg-[#5e9c53] duration-300 text-white py-2 px-4 rounded-full mr-4 mt-3 lg:mt-0 ">
                            Server
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;