import React from 'react';
import { FaAngleDown, FaDeleteLeft } from "react-icons/fa6";

const MyBookingCard = ({ mybooking, handleDelete, handlePending }) => {

    const { _id, title, img, price, date, status } = mybooking;


    return (
        <div className=' card w-[80%] mx-auto m-2  p-2 shadow-lg'>
            <div className='grid grid-cols-6 gap-8 items-center text-xl justify-around'>
                <button onClick={() => handleDelete(_id)} className=' pl-4 w-8 text-3xl text-red-600 to-black'><FaDeleteLeft /></button>
                <img className='w-28 shadow-xl bg-gradient-to-r from-orange-600 to-black rounded-md' src={img}></img>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{date}</p>
                {
                    status === 'confirm' ? <span className='font-bold '>Confirmed</span> :
                    <button onClick={()=>handlePending(_id)} className='btn btn-outline'>Pending</button>
                }
            </div>
        </div>
    );
};

export default MyBookingCard;