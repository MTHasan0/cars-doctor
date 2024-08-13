import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import imgCheckout from '../../assets/images/checkout/checkout.png'


const CheckOut = () => {

    const service = useLoaderData();
    const { _id, price, title, img, description } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const date = form.date.value;
        const price = form.price.value;
        const message = form.message.value;

        const order = {
            customerName: name,
            email,
            number,
            date,
            price,
            message,
            title,
            img,
            order_id: _id
        }
      

        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                
                alert('Order confirmed')
            })
    }

    return (
        <div>
            <div className="relative w-full">
                <img className=" opacity-60  mx-auto" src={imgCheckout}></img>
                <h2 className=" w-full text-4xl font-black absolute top-28 text-center">Check Out</h2>
            </div>
            <div className="lg:flex gap-4  p-4">

                <div className="card bg-base-100 shadow-lg m-auto lg:w-2/3">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
                        <p>{description}</p>

                    </div>

                </div>
                <form onSubmit={handleCheckOut} className="lg:w-1/3 shadow-xl p-4 rounded-xl">
                    <div >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your Name" name='name' className="input input-bordered bg-gray-50" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" defaultValue={user?.email} name='email' className="input input-bordered bg-gray-50" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input type="tel" placeholder="Enter your number" name='number' className="input input-bordered bg-gray-50" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered bg-gray-50" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" rows="6" className=" input-bordered p-2.5 w-full   bg-gray-50 rounded-lg border" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-block bg-gradient-to-l from-orange-600 to-black text-white' name="price" value={'$ '+price}></input>

                        </div>


                    </div>
                    <div className="form-control mt-6">
                        <input className='btn hover:bg-gradient-to-r from-orange-600 to-black hover:text-white' type='submit' value='Confirm Booking'></input>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;