import { Link } from 'react-router-dom';

import avatarAnisha from '../assets/images/avatar-anisha.png';
import avatarAli from '../assets/images/avatar-ali.png';
import avatarRichard from '../assets/images/avatar-richard.png';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      {/* Container to heading and testimonial blocks */}
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        {/* Heading */}
        <h2 className='text-4xl font-extrabold text-center'>
        Founding Innovation Catalysts of Critique Connect
        </h2>
        {/* Testimonials Container */}
        <div className='flex flex-col mt-16 md:flex-row md:space-x-6'>
          {/* Testimonial 1 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFwUc8drDgpUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694801897427?e=1733356800&v=beta&t=VaEb1d2j4N2Vh2itJpcxAv5_90HZxFJZkp6bOWML3e8" className='w-24 -mt-14 rounded-full' alt='Anisha Li' />
            <h5 className='text-lg font-bold'>Nikhil Raikwar</h5>
            <p className='text-sm text-gray-500'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQGQ0J2-mHt_fg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719084859795?e=1733356800&v=beta&t=k9tLh0Nk6e9oyL_ocm2q16A3gx9z6m3Hb4CtRQsWN1A" className='w-24 -mt-14 rounded-full' alt='Ali Bravo' />
            <h5 className='text-lg font-bold'>Mohd Anas</h5>
            <p className='text-sm text-gray-500'>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQHIge99k55k0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687762600340?e=1733356800&v=beta&t=09yqXgsTwY4faaxnpfrVqdT-c8RrSJP5JHL6T0LuRSk" className='w-24 -mt-14 rounded-full' alt='Richard Watts' />
            <h5 className='text-lg font-bold'>Gaurav verma</h5>
            <p className='text-sm text-gray-500'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQHaNAteIgA_Aw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722700868951?e=1733356800&v=beta&t=1yAbrwsCwHJAMuhgDQYs_sP8PHf9t5lQfeF9b3D9zak" className='w-24 -mt-14 rounded-full' alt='Richard Watts' />
            <h5 className='text-lg font-bold'>Gaurav verma</h5>
            <p className='text-sm text-gray-500'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        {/* Button */}
        <div className='my-16'>
          <Link
            to='/signup'
            className='inline-block p-3 px-6 pt-2 text-white bg-red-600 rounded-full transition-all duration-300 hover:bg-red-700'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
