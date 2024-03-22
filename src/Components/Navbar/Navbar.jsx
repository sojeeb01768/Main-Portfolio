import React, { useState } from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import './Navbar.css'
import ActiveLink from '../ActiveLink/Activelink';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={isDarkMode ? 'primary-bg lg:fixed w-full lg:mx-1 px-2  lg:rounded-lg z-50' : 'bg-gray-200 lg:fixed w-full  lg:mx-1 px-2 lg:rounded-lg z-50'}>
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-0 py-2 lg:py-0 lg:px-8">
                {/* Logo */}
                <div className=" items-center hidden lg:block">
                    {/* <img src="/path/to/logo.png" alt="" className="h-8 mr-2 " /> */}

                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={handleMobileMenuToggle} className={isDarkMode ? "text-gray-100 focus:outline-none" : "text-gray-800 focus:outline-none"}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden ${isMobileMenuOpen ? 'block z-50 ' : 'hidden'} absolute top-12 left-0 right-0 `}>
                    <div className={isDarkMode ? "flex primary-bg  h-screen  flex-col items-center py-4" : "flex bg-gray-200 h-screen  flex-col items-center py-4"}>
                        <button className='flex flex-col justify-center items-center' onClick={handleMobileMenuToggle}>
                            <ActiveLink to="/" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-1">Home</ActiveLink>
                            <ActiveLink to="/projects" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-1">Projects</ActiveLink>
                            <ActiveLink to="/expertise" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-1">Expertise</ActiveLink>
                            <ActiveLink to="/contact" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-1">Contact</ActiveLink>
                        </button>

                    </div>
                </div>

                {/* Menu Items for Larger Screens */}
                <div className="hidden lg:flex  lg:justify-center lg:space-x-4 mt-4 lg:mt-0">
                    <ActiveLink to="/" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-2">Home</ActiveLink>
                    <ActiveLink to="/projects" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-2">Projects</ActiveLink>
                    <ActiveLink to="/expertise" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-2">Expertise</ActiveLink>
                    <ActiveLink to="/contact" className="text-sm font-[600] tracking-[3px] uppercase px-3 py-2">Contact</ActiveLink>
                </div>

                {/* Right side buttons */}
                <div className="flex items-center lg:space-x-5">
                    <button className="text-xs font-bold tracking-[3px] uppercase bg-[#70BA65] hover:bg-[#5e9c53] duration-300 text-white py-2 px-4 rounded-full mr-4">
                        Download cv
                    </button>
                    <div>
                        <button className={isDarkMode ? 'mt-1 border border-slate-700 p-1 rounded-full' : 'mt-1 border bg-slate-700 border-slate-400 p-1 rounded-full'} onClick={toggleDarkMode}>
                            {
                                isDarkMode ? <MdSunny className='text-yellow-500 text-xl' /> : <FaMoon className='text-slate-100 text-xl' />
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
