import { useState } from 'react';
import '../../App.css';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [navbar, setNavBar] = useState(false);

  const navStyle = ({ isActive }) => (isActive ? 'text-orange-700' : '')

  return (
    <>
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center bg-white px-3 rounded py-2">

        <div className="space-x-1 flex items-center">
          <div onClick={() => setNavBar(!navbar)} className='md:hidden cursor-pointer'>
            <FaBars />
          </div>
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-10 rounded-full"
              alt="Logo"
            />
          </Link>

        </div>

        <div className={`flex ${navbar ? 'flex-col' : 'hidden'} md:flex md:gap-8 md:static absolute w-full transition-all duration-300 ease-in-out ${navbar ? 'top-24' : 'hidden'
          }`}>

          <NavLink className={navStyle} to="/" >Home</NavLink>
          <NavLink className={navStyle} to="/about" >About</NavLink>
          <NavLink className={navStyle} to="/user" >Users</NavLink>
          <NavLink className={navStyle} to="/post" >Posts</NavLink>
          <NavLink className={navStyle} to="/contact">Contact Us</NavLink>
        </div>

        <div className="text-right space-x-1 justify-end">

          <Link
            to="#"
            className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Get started
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
