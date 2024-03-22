import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import img from '../../assets/bg3.jpg'
import { Link } from 'react-router-dom';

const Card = ({ project }) => {

    const { isDarkMode } = useTheme();
    const { id, title, image, technology, live, git, git_server } = project;

    return (
        <div>
            <div className={isDarkMode ? 'w-full primary-bg shadow-lg shadow-white/5 hover:-translate-y-2 cursor-pointer duration-300 rounded-lg' : 'w-full bg-gray-200 shadow-lg hover:-translate-y-2 cursor-pointer duration-300 rounded-lg'}>
                <h1 className={isDarkMode ? 'primary-bg font-semibold text-2xl p-4 rounded-t-lg' : 'bg-gray-200 font-semibold text-2xl p-4 rounded-t-lg'}>{title}</h1>
                <div className='md:flex '>
                    <div className='overflow-hidden'>
                        <img className='object-cover w-full h-full' src={image} alt="" />
                    </div>
                    <div className={isDarkMode ? 'bg-[#47853da8] mb-1 md:mb-0 pb-2' : 'bg-gray-300 mb-1 md:mb-0 pb-2'}>
                        <h1 className='text-xl font-semibold p-2 md:px-10'>Technology</h1>
                        <div>
                            <ul className='grid grid-cols-4 md:grid-cols-2 gap-1 p-1'>
                                {technology.slice(0, 5).map(tech => (
                                    <li className={isDarkMode ? 'text-xs bg-[#70BA65] p-0.5 rounded-lg flex justify-center ' : 'text-xs bg-[#70BA65] text-white p-0.5 rounded-lg flex justify-center '}>{tech.name}</li>
                                ))}
                                {technology.length > 5 && (
                                    <li title='more' className={isDarkMode ? 'text-xs bg-[#70BA65] p-0.5 rounded-lg flex justify-center ' : 'text-xs bg-[#70BA65] text-white p-0.5 rounded-lg flex justify-center '}>...</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 rounded-b-xl md:rounded-b-none '>
                    <a href={live} target='blank'>
                        <button className=" hover:text-blue-500  font-bold py-4 px-4 ">
                            Live
                        </button>
                    </a>
                    <a href={git} target='blank'>
                        <button className="hover:text-green-500 duration-300 border-l    border-gray-400 font-bold py-4 px-4 ">
                            Code
                        </button>
                    </a>
                    <a href={git_server || '#'} target='blank'>
                        <button
                            className={`hover:text-green-500 duration-300 border-r border-gray-400 font-bold py-4 px-4 ${!git_server ? 'text-gray-500' : ''}`}
                            disabled={!git_server}
                        >
                            Server
                        </button>
                    </a>

                    <button className=" hover:text-gray-500  font-bold py-4 px-4 ">
                        <Link to={`/projectDetails/${id}`}>Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;