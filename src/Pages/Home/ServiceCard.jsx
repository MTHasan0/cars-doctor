import React from 'react';

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (

        <div className="card bg-base-100 w-96 shadow-lg">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-outline hover:bg-orange-600">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;