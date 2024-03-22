import { useTheme } from '../../Provider/ThemeContext';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const { isDarkMode } = useTheme();
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n90l1u3', 'template_0lpu2pt', form.current, 'HUHuEl-E9M938bhbC')
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                form.current.reset();
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={` h-full lg:h-screen pt-[450px] lg:pt-0  ${isDarkMode ? 'dark' : 'light'}`}>
            <div>
                <div className='lg:flex gap-5 mx-7 '>
                    <div className={isDarkMode ? 'w-full flex flex-col justify-center items-center h-56 p-5  primary-bg rounded-lg shadow-lg lg:-mt-10 z-20 space-y-3 mt-5' : 'w-full flex flex-col justify-center items-center h-56 p-5  bg-gray-200 rounded-lg shadow-lg lg:-mt-10 z-20 space-y-3 mt-5'}>
                        <FaPhone className='text-5xl' />
                        <h1>Call</h1>
                        <p> <span className='text-gray-500'>+88 01768670013</span></p>
                    </div>
                    <div className={isDarkMode ? 'w-full flex flex-col justify-center items-center h-56 p-5  primary-bg rounded-lg shadow-lg lg:-mt-10 z-20 space-y-3 mt-5' : 'w-full flex flex-col justify-center items-center h-56 p-5  bg-gray-200 rounded-lg shadow-lg lg:-mt-10 z-20 space-y-3 mt-5'}>
                        <MdOutlineMarkEmailRead className='text-5xl' />
                        <h1>Email</h1>
                        <p><span className='text-gray-500'>sojeebahmed.sa@gmail.com</span></p>
                    </div>
                </div>
            </div>

            <div className={isDarkMode ? "lg:w-[770px] p-8 primary-bg shadow-lg rounded-lg mt-10 mx-6 lg:mx-0" : "lg:w-[770px] p-8 bg-gray-200 shadow-lg rounded-lg mt-10 mx-6 lg:mx-0"}>
                <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
                <div className='flex justify-center'>
                    {isSuccess && <p className={isDarkMode ? 'text-center text-green-500 primary-bg w-56 p-2 border-b-[5px] border-green-500 rounded-t-md rounded-b-sm ' : 'text-center text-green-500 bg-gray-200 w-56 p-2 border-b-[5px] border-green-500 rounded-t-md rounded-b-sm '}>Email sent successfully!</p>}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" name="user_name" className="w-full px-4 py-3 rounded-lg bg-gray-500/10 focus:outline-none focus:border-[#70BA65]" placeholder="Name" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="user_email" className="w-full px-4 py-3 rounded-lg bg-gray-500/10 focus:outline-none focus:border-[#70BA65]" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 rounded-lg bg-gray-500/10 focus:outline-none focus:border-[#70BA65]" placeholder="Message"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full px-6 py-3 bg-[#70BA65] hover:bg-[#5c9852] duration-300 text-white font-semibold rounded-lg shadow-md focus:outline-none">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;