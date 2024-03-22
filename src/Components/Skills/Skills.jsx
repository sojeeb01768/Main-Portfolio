import React from 'react';
import RadialProgress from '../RadialProgress/RadialProgress';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='mx-5'>
            <div className='flex items-center my-10 gap-5 '>
                <h1 className="text-xl font-bold">Skills</h1>
                <hr className='hidden lg:block border-collapse border-dashed border-slate-500 w-60 lg:w-[660px]' />
            </div>
            <div className='flex justify-center items-center  lg:space-x-10 '>
                <div>
                    <RadialProgress progress={90} />
                    <p className='text-center'>HTML</p>
                </div>
                <div>
                    <RadialProgress progress={80} />
                    <p className='text-center'>CSS</p>
                </div>
                <div>
                    <RadialProgress progress={10} />
                    <p className='text-center'>JavaScript</p>
                </div>
            </div>
            <Link to='/expertise' className='flex justify-center mt-20'>
                <button className='flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-[#70BA65] duration-300  py-2 px-4 rounded-full mr-4 hover:gap-3'>See more <FaArrowRight className='mt-0.5 text-base' /> </button>
            </Link>
        </div>
    );
};

export default Skills;