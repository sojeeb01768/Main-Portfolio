import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='promotion max-w-[1400px] mx-auto rounded-b-lg pt-32 '>
            <div className='max-w-2xl mx-auto lg:pl-48 text-center lg:text-left text-white'>
                <p className='text-xl'>Hi there</p>
                <h1 className='text-5xl lg:text-6xl font-extrabold tracking-wider leading-snug '>Discover my art space!</h1>
            </div>
        </div>
    );
};

export default Banner;
