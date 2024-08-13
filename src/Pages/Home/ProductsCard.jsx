import React from 'react';

const ProductsCard = ({product}) => {

    const {name, price, rating, image } = product;
    return (
        <div className="card bg-base-100 h-[32rem] shadow-lg m-auto">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-outline hover:bg-gradient-to-r from-orange-600 to-black">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;