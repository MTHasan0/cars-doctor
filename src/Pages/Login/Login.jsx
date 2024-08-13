import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                Swal.fire({
                    title: "Logged in",
                    text: "Logged in successful",
                    icon: "success"
                });
                const user = { email };
                //get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => console.log(error));

    }

    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row md:flex-row items-center h-auto">
                <div className=" lg:w-1/2 ">
                    <img className='' src={loginImg}></img>
                </div>
                <div className="card bg-base-100 w-full lg:w-[50%]  md:w-[50%] shrink-0 shadow-2xl border py-10 border-slate-100">
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
                            <input className='btn btn-outline hover:bg-gradient-to-r from-orange-600 to-black hover:text-white' type='submit' value='Login'></input>

                        </div>

                    </form>
                    <p className='text-center'>New here? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;