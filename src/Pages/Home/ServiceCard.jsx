import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (

        <div className="  ">
            <div className='card bg-base-100 h-full shadow-lg m-auto'>
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt=""
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-outline  hover:bg-gradient-to-r from-orange-600 to-black">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;