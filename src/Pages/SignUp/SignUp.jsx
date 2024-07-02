import React from 'react';

import SignUpImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';





const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault()
    }
    return (
        <div className="hero-content flex-col lg:flex-row items-center h-auto">
            <div className=" w-1/2 ">
                <img className='max-w-sm' src={SignUpImg}></img>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border py-10 border-slate-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <h2 className='text-4xl font-bold'>Sign up</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input type="tel" placeholder="Enter your mobile Number" name='number' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-outline hover:bg-orange-600' type='submit' value='Sign Up'></input>

                    </div>

                </form>
                <p className='text-center'>Have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;