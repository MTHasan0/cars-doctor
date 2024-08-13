import React from 'react';
import { FaCalendarDays, FaMapLocation, FaPhone } from "react-icons/fa6";


const Availabilities = () => {
    return (
        <div className='w-full bg-black space-y-5 lg:space-y-0 lg:flex lg:justify-around py-16 mt-10 rounded-xl pl-6'>
            <div>
                <div className='flex items-center gap-5 text-white'>
                    <FaCalendarDays className='text-2xl text-orange-500' />

                    <div>
                        <p>We are open monday-friday</p>
                        <p  className='font-bold'>7:00 am - 9:00 am</p>
                    </div>
                </div>
                
            </div>
            <div>
                <div className='flex items-center gap-5 text-white'>
                    <FaPhone className='text-2xl text-orange-500' />

                    <div>
                        <p>Have a question?</p>
                        <p  className='font-bold '>+000000000</p>
                    </div>
                </div>
                
            </div>
            <div>
                <div className='flex items-center gap-5 text-white'>
                    <FaMapLocation className='text-2xl text-orange-500' />

                    <div>
                        <p>Need a repair? Our Address</p>
                        <p  className='font-bold'>Dhaka Bangladesh</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Availabilities;