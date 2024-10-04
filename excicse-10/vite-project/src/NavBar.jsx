import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isLoggIn, setisLogdIn] = useState(false);
    const navaget = useNavigate()

    const login = () => {
        setisLogdIn(true)
        navaget('/dashboard')
    }
    const logOut = () => {
        setisLogdIn(false);
        navaget('/')
    }

    const toggleNav = () => {
        setNavOpen(!navOpen);
        
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-indigo-600">
                        MyLogo
                    </div>

                    {/* Links for Desktop */}
                    <div className="hidden md:flex space-x-8">
                        {
                            !isLoggIn && (<>
                                <Link to="/" className="text-gray-600 hover:text-indigo-600">
                                    Home
                                </Link>
                                <Link to="/about" className="text-gray-600 hover:text-indigo-600">
                                    About
                                </Link>
                                <button onClick={login}  className="text-gray-600 hover:text-indigo-600">
                                    Login
                                </button>
                            </>)
                        }


                        {
                            isLoggIn && (<>
                                <Link to="/meal" className="text-gray-600 hover:text-indigo-600">
                                    Meal
                                </Link>
                                <Link to="/product" className="text-gray-600 hover:text-indigo-600">
                                    Product
                                </Link>
                                <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">
                                    DashBoard
                                </Link>
                                <Link to="/Profile" className="text-gray-600 hover:text-indigo-600">
                                    Profile
                                </Link>
                                <button onClick={logOut}className="text-gray-600 hover:text-indigo-600">
                                    LogOut
                                </button>
                            </>)
                        }




                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleNav} className="text-gray-600 focus:outline-none">
                            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {
                            !isLoggIn && (<>
                            <Link to="/" className="text-gray-600 hover:text-indigo-600">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-indigo-600">
                            About
                        </Link>
                        <button onClick={login} className="text-gray-600 hover:text-indigo-600">
                            Login
                        </button>
                            </>)
                        }
                        

                        {
                            isLoggIn && (<>
                            <Link to="/meal" className="text-gray-600 hover:text-indigo-600">
                            Meal
                        </Link>
                        <Link to="/product" className="text-gray-600 hover:text-indigo-600">
                            product
                        </Link>
                        <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">
                            Dashborad
                        </Link>
                        <Link to="/profile" className="text-gray-600 hover:text-indigo-600">
                            Profile
                        </Link>
                        
                        <button onClick={logOut} className="text-gray-600 hover:text-indigo-600">
                            LogOut
                        </button>
                            </>)
                        }
                        
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;