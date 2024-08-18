import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";

const MyBookingCard = ({ mybooking, handleDelete, handlePending }) => {

    const { _id, title, img, price, date, status } = mybooking;


    return (
        <div className=' card w-[95%] lg:w-[75%] md:w-[95%]  mx-auto m-2 p-4 lg:p-2 shadow-lg'>
            <div className='grid md:grid-cols-6 lg:grid-cols-6  gap-3 lg:gap-8 items-center lg:text-lg md:text-sm justify-around'>
                
                <img className='lg:w-28 md:w-48 shadow-xl bg-gradient-to-r from-orange-600 to-black rounded-md' src={img}></img>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{date}</p>
                {
                    status === 'confirm' ? <span className='font-bold '>Confirmed</span> :
                    <button onClick={()=>handlePending(_id)} className='btn btn-outline'>Pending</button>
                }
                <div className='w-full '><button onClick={() => handleDelete(_id)} className=' lg:pl-4 w-8 text-3xl text-red-600 to-black'><FaDeleteLeft /></button></div>
            </div>
        </div>
    );
};

export default MyBookingCard;