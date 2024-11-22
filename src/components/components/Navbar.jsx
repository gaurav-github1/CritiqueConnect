import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/Screenshot (279)_enhanced.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-28 bg-white shadow-md z-50">
      {/* Flex Container */}
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="w-40">
          <Link to="/">
            <img src={companyLogo} alt="Company Logo" />
          </Link>
        </div>
        {/* Menu Items for Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link to="#" className="text-gray-800 hover:text-gray-500 transition">
            Pricing
          </Link>
          <Link to="#" className="text-gray-800 hover:text-gray-500 transition">
            Product
          </Link>
          <Link to="#" className="text-gray-800 hover:text-gray-500 transition">
            About Us
          </Link>
          <Link to="#" className="text-gray-800 hover:text-gray-500 transition">
            Careers
          </Link>
          <Link to="#" className="text-gray-800 hover:text-gray-500 transition">
            Community
          </Link>
        </div>
        {/* Get Started Button */}
        <Link
          to="/signup"
          className="hidden md:block p-3 px-6 text-white bg-red-600 rounded-full transition duration-300 hover:bg-red-700"
        >
          Get Started
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className="space-y-1">
            <span
              className={`block w-8 h-1 bg-black transform transition duration-300 ${
                toggleMenu ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-black transition duration-300 ${
                toggleMenu ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-black transform transition duration-300 ${
                toggleMenu ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-md ${
          toggleMenu ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 font-bold">
          <Link to="#" className="text-gray-800 hover:text-red-600 transition">
            Pricing
          </Link>
          <Link to="#" className="text-gray-800 hover:text-red-600 transition">
            Product
          </Link>
          <Link to="#" className="text-gray-800 hover:text-red-600 transition">
            About Us
          </Link>
          <Link to="#" className="text-gray-800 hover:text-red-600 transition">
            Careers
          </Link>
          <Link to="#" className="text-gray-800 hover:text-red-600 transition">
            Community
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  