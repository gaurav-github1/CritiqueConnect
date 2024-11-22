import { Link } from 'react-router-dom';

import companyLogoWhite from '../assets/images/Screenshot (279)_enhanced.png';
import facebookLogo from '../assets/images/icon-facebook.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      {/* Flex Container */}
      <div className='container mx-auto flex flex-col-reverse justify-between px-6 py-12 space-y-12 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between md:flex-col md:items-start'>
          <div className='my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src={companyLogoWhite} className='w-48 rounded-lg mb-10' alt='Company Logo' />
          </div>
          {/* Social Links Container */}
          <div className='flex justify-center space-x-4 mt-4 md:mt-0'>
            <Link to='/'>
              <img src={facebookLogo} className='h-8 transition-transform duration-300 hover:scale-110' alt='Facebook' />
            </Link>
            <Link to='/'>
              <img src={youtubeLogo} className='h-8 transition-transform duration-300 hover:scale-110' alt='YouTube' />
            </Link>
            <Link to='/'>
              <img src={twitterLogo} className='h-8 transition-transform duration-300 hover:scale-110' alt='Twitter' />
            </Link>
            <Link to='/'>
              <img src={pinterestLogo} className='h-8 transition-transform duration-300 hover:scale-110' alt='Pinterest' />
            </Link>
            <Link to='/'>
              <img src={instagramLogo} className='h-8 transition-transform duration-300 hover:scale-110' alt='Instagram' />
            </Link>
          </div>
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-12'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='/' className='hover:text-red-500'>
              Home
            </Link>
            <Link to='/pricing' className='hover:text-red-500'>
              Pricing
            </Link>
            <Link to='/products' className='hover:text-red-500'>
              Products
            </Link>
            <Link to='/about' className='hover:text-red-500'>
              About
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='/careers' className='hover:text-red-500'>
              Careers
            </Link>
            <Link to='/community' className='hover:text-red-500'>
              Community
            </Link>
            <Link to='/privacy-policy' className='hover:text-red-500'>
              Privacy Policy
            </Link>
          </div>
        </div>
        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='Updated in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-red-600 transition-all duration-300 hover:bg-red-700 focus:outline-none'>
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block mt-8'>
            Copyright © 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
