import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const AboutMe = () => {

    const {isDarkMode}=useTheme();

    return (
        <div className='pt-[450px] lg:pt-0 mx-5 lg:mx-0'>
            <div className='flex items-center my-10 gap-5 '>
                <h1 className="text-xl font-bold">My Story</h1>
                <hr className='border-collapse border-dashed border-slate-500 w-60 lg:w-[660px]' />
            </div>
            <div style={{fontFamily:"Average Sans"}} className={isDarkMode ? 'primary-bg p-5 text-lg rounded-lg text-justify space-y-3 shadow-lg lg:w-[770px]' : 'bg-gray-200 p-5 text-lg rounded-lg text-justify space-y-3 shadow-lg lg:w-[770px]'}>
                <p>Hello! I'm Fahim, a programmer with a good level of expertise in Front-End Web Development. I'm currently studying at Imperial College of Engineering pursuing a degree BSc Engineering in Computer Science & Engineering under Rajshahi University. I'm a tech lover and like to write blogs about programming and web development. I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.

                </p>
                <p> I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.</p>
            </div>
        </div>
    );
};

export default AboutMe;