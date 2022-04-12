import React from 'react';
import { Link } from 'react-router-dom';

const WarehouseItem = ({ warehouse }) => {
  return (
    <div className='p-6 transition-all duration-200 rounded-lg shadow-lg bg-secondary hover:-translate-y-3'>
      <h6 className='mb-5 text-lg font-medium leading-relaxed text-center text-gray-100 lg:mb-8 lg:leading-relaxed lg:text-xl'>
        {warehouse.address}
      </h6>

      <p className='mb-4 text-center text-gray-300 lg:mb-6'>
        Latitude:{' '}
        <span className='font-medium text-brand-text'>{warehouse.lat}</span>
      </p>
      <p className='mb-4 text-center text-gray-300 lg:mb-6'>
        Longitude:{' '}
        <span className='font-medium text-border'>{warehouse.lng}</span>
      </p>

      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        <span className='font-medium text-cta-dark'>{warehouse.status}</span>
      </h6>
    </div>
  );
};

export default WarehouseItem;
