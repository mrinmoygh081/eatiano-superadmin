import React from 'react';

const Details = ({ details }) => {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-semibold text-gray-100 md:mb-6 lg:mb-8 lg:text-4xl'>
        {details.blog_heading}
      </h1>

      <h6 className='mb-3 leading-relaxed text-gray-300 lg:mb-5 lg:text-lg lg:leading-relaxed'>
        {details.blog_subheading}
      </h6>

      <h6 className='mb-10 text-xs italic text-gray-300 lg:text-sm md:mb-12 lg:mb-16'>
        <span className='text-brand-text'>Created at:</span>{' '}
        {details.created_at}
      </h6>

      <p className='leading-relaxed text-gray-200 lg:text-lg lg:text-relaxed'>
        {details.blog_details}
      </p>
    </div>
  );
};

export default Details;
