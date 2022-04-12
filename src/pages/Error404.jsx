import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
      <div className='bg-no-repeat font-rubik bg-error'>
        <div className='container py-24 lg:py-40'>
          <h1 className='mb-6 text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-cta md:mb-10 lg:mb-14'>
            Error
          </h1>

          <h2 className='mb-10 text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-brand-text md:mb-12 lg:mb-16'>
            404
          </h2>
          <h4 className='mb-10 text-3xl text-center md:text-4xl lg:text-5xl text-brand-text md:mb-14 lg:mb-20'>
            Opps, Went The Wrong Way!!
          </h4>

          <div className='max-w-sm mx-auto'>
            <Link to='/'>
              <button className='w-full px-8 py-3 text-xl font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-2xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
                Back To Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
