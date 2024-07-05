import React from 'react';

import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.log(error));

    }

    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row items-center h-auto">
                <div className=" w-1/2 ">
                    <img className='max-w-sm' src={loginImg}></img>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border py-10 border-slate-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h2 className='text-4xl font-bold'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-outline hover:bg-orange-600' type='submit' value='Login'></input>

                        </div>

                    </form>
                    <p className='text-center'>New here? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;