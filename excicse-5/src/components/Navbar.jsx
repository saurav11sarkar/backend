import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, singoutUser} = useContext(AuthContext);
    const handleSingOut = () =>{
        singoutUser()
        .then(() => console.log('User Logged out Successfully'))
        .catch(error => console.error(error))
    }
    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/login'}>Log In</NavLink></li>
    <li><NavLink to={'/singup'}>Sing Up</NavLink></li>
    <li><NavLink to={'/orders'}>Orders</NavLink></li>
    {
        user && <>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>
        <li><NavLink to={'/dashbord'}>DashBord</NavLink></li>
        </>
    }
     </>
    return (
        <div className="navbar bg-base-100">
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
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <span className="text-sm">{user.email}</span>
                    <a onClick={handleSingOut} className="btn btn-sm">Sing Out</a>
                    </>:
                    <Link to={'/login'} className="btn">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;