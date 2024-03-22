import React from 'react';
import myPic from '../../assets/sojeeb.jpeg'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../Provider/ThemeContext';
import { Link } from 'react-router-dom';

const PersonalDetails = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={isDarkMode ? 'primary-bg h-[600px] w-[350px] rounded-xl px-8' : 'bg-gray-200 shadow-lg h-[600px] w-[350px] rounded-xl px-8'}>
            <div className='flex justify-center pt-8'>
                <img src={myPic} alt="" className=' h-24 w-24 rounded-full' />
            </div>
            <h1 className='text-center text-xl mt-5 font-semibold tracking-widest'>Md. Al Kafee</h1>
            <p className={isDarkMode ? 'text-xs text-center my-2 tracking-wider text-slate-400 uppercase mb-5' : 'text-xs text-center my-2 tracking-wider text-slate-700 uppercase mb-5'}>MERN Stack Developer</p>
            <hr className='border-collapse border-dashed border-slate-500' />
            <div className={isDarkMode ? 'flex justify-center space-x-4 text-slate-300 mx-auto items-center my-10' : 'flex justify-center space-x-4 text-slate-700 mx-auto items-center my-10'}>
                <a href="https://www.facebook.com/sojeeb.mridha.9/" target='blank'><FaFacebook className='text-xl' /></a>
                <a href="" target='blank'><FaLinkedin className='text-xl' /></a>
                <a href="https://github.com/sojeeb01768" target='blank'><FaGithub className='text-xl' /></a>
            </div>
            <hr className='border-collapse border-dashed border-slate-500' />
            <div className='my-10 text-sm space-y-2'>
                <div className='flex justify-between'>
                    <p>Current address: </p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className='flex justify-between'>
                    <p>Email: </p>
                    <p>sojeebahmed.sa@gmail.com</p>
                </div>
            </div>
            <hr className='border-collapse border-dashed border-slate-500' />
            <div className='flex justify-center mt-10'>
                <Link to='/contact'>
                    <button className="text-xs font-bold tracking-[3px] uppercase bg-[#70BA65] hover:bg-[#5e9c53] duration-300 text-white py-3 px-4 rounded-full mr-4">
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PersonalDetails;