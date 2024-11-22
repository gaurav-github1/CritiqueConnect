import { Link } from 'react-router-dom';

import illustrationIntro from '../assets/images/illustration-intro.svg';

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-24 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-2/3'>
          <h1 className='max-w text-4xl font-extrabold text-center md:text-5xl md:text-left'>
            "Ideas meet feedback, success follows."
          </h1>
          <p className='max-w-sm text-center text-gray-500 md:text-left font-bold'>
            "Connect to share your vision,
            Receive genuine, thoughtful feedback,
            Grow your ideas beyond boundaries."
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='/signup'
              className='p-3 px-6 pt-2 text-white bg-red-600 rounded-full transition duration-300 hover:bg-red-700'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='Illustration of team collaboration' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
