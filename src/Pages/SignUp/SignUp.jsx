import React, { useContext } from 'react';

import SignUpImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';





const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email, password)
        .then(result=>{
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero-content flex-col lg:flex-row md:flex-row items-center h-auto">
            <div className=" lg:w-1/2 ">
                <img className='' src={SignUpImg}></img>
            </div>
            <div className="card bg-base-100 w-full lg:w-[45%]  md:w-[50%] shrink-0 shadow-2xl border py-10 border-slate-100">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-outline hover:bg-gradient-to-r from-orange-600 to-black hover:text-white' type='submit' value='Sign Up'></input>

                    </div>

                </form>
                <p className='text-center'>Have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;