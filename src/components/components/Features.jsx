import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-extrabold text-center md:text-left'>
            What's different about CRITIQUE CONNECT?
          </h2>
          <p className='max-w-sm text-center text-gray-500 md:text-left'>
            Empowers both early-stage creators and seasoned professionals by providing a platform to validate and improve their work in a supportive environment.
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-600'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Tailored Feedback
              </h3>
              <p className='text-gray-500'>
              Users can request specific types of critiques (e.g., technical, design, user experience), allowing for highly focused and useful insights.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-600'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Diverse Expert Pool
              </h3>
              <p className='text-gray-500'>
              Connect with a community of diverse experts from different domains. Each user brings unique knowledge and perspectives to your project. Receive well-rounded feedback that covers multiple aspects of your idea. This makes your solution more resilient and complete.
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-600'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Structured Review Process
              </h3>
              <p className='text-gray-500'>
              Receive feedback in a structured, organized format that makes sense. Each critique is broken down into actionable parts, easy to understand and implement. This system helps users apply changes effectively and track progress. Structured reviews make refining your project more straightforward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
