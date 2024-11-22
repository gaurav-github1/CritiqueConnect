import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id='cta' className='bg-red-600'>
      {/* Flex Container */}
      <div className='container mx-auto flex flex-col items-center justify-between px-6 py-12 space-y-12 md:flex-row md:space-y-0'>
        {/* Heading */}
        <h2 className='text-4xl font-extrabold leading-tight text-center text-white md:text-5xl md:max-w-lg md:text-left'>
          Simplify how your team works today
        </h2>
        {/* Button */}
        <div>
          <Link
            to='/signup'
            className='p-3 px-6 pt-2 text-white bg-red-700 rounded-full transition-all duration-300 hover:bg-red-800 md:inline-block'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
