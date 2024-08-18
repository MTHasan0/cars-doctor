import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/service'>Service</Link></li>
        {user?.email && <li><Link to='/mybooking'>My Booking</Link></li>}
        
        
        
    </>
    return (
    <div className="navbar bg-base-100 mb-5">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navItems}
                </ul>
            </div>
            <Link to='/' className="text-xl ">
                <img src={logo}></img>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navItems}
            </ul>
        </div>
        <div className="navbar-end flex gap-3">
            {
                user?.email ? <Link ><button onClick={handleLogout} className='btn bg-white hover:bg-gradient-to-r from-orange-600 to-black hover:text-white'>Logout</button></Link> : <Link to='/login'><button className='btn bg-white hover:bg-gradient-to-r from-orange-600 to-black hover:text-white'>Login</button></Link>
            }
            <button className='btn bg-white hover:bg-gradient-to-r hidden md:flex   from-orange-600 to-black hover:text-white'>Appointment</button>
        </div>
    </div>
);
};

export default Navbar;