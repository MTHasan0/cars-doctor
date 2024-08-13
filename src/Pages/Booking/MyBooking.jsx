
import React, { useContext, useEffect, useState } from 'react';
import imgCheckOut from '../../assets/images/checkout/checkout.png'

import MyBookingCard from './MyBookingCard';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
// import { WiNightClear } from 'react-icons/wi';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const [mybookings, setMyBookings] = useState([]);

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/checkout/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted');
                        const remaining = mybookings.filter(mybookings._id !== id);
                        setMyBookings(remaining);
                    }
                })
        }
    }

    const handlePending = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifyCount > 0) {
                    ///update state
                    const remaining = mybookings.filter(mybooking => mybooking._id !== id);
                    const updated = mybookings.find(mybooking => mybooking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setMyBookings(newBookings);
                }
            })
    }

    const url = `http://localhost:5000/checkout?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: 'true' })
            .then(res => {
                setMyBookings(res.data)
            })
            // fetch('`http://localhost:5000/checkout?email=${user?.email}`', { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setMyBookings(data))
    }, [url]);

    return (
        <div className='text-center lg:mt-20 flex-col mx-auto '>
            <div className="relative w-full ">
                <img className="opacity-50 mx-auto" src={imgCheckOut} ></img>
                <h2 className=" w-full text-4xl font-black absolute top-28 text-center">My Booking List</h2>
            </div>


            <div className='mt-10'>
                {
                    mybookings.map(mybooking => <MyBookingCard

                        key={mybooking._id}
                        mybooking={mybooking}
                        handleDelete={handleDelete}
                        handlePending={handlePending}>

                    </MyBookingCard>)
                }
            </div>


        </div>
    );
};

export default MyBooking;