import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = ({ restaurantData }) => {
  const restaurantImageSrc = `https://achievexsolutions.in/current_work/eatiano${restaurantData.restaurant_image}`;

  return (
    <div>
      <div>
        <img
          src={restaurantImageSrc}
          alt=''
          className='w-full mb-6 rounded-xl md:mb-8'
        />
      </div>
      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        {restaurantData.restaurant_name}
      </h6>
      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Phone: {restaurantData.restaurant_ph}
      </h6>
      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        <i className='fa fa-map-marker'></i> {restaurantData.restaurant_address}
      </p>

      <div className='flex items-center justify-between'>
        <p className='text-gray-300'>Lat: {restaurantData.lat}</p>
        <p className='text-gray-300'>Lng: {restaurantData.lng}</p>
      </div>

      <div className='flex items-center justify-around mt-5'>
        <Link
          to={`/restaurantProducts/${restaurantData.restaurant_id}`}
          className='text-brand-text hover:text-border'
        >
          View All Items
        </Link>

        <Link
          to={`/editRestaurant/${restaurantData.restaurant_id}`}
          className='text-border hover:text-brand-text'
        >
          Edit Details
        </Link>
      </div>
    </div>
  );
};

export default RestaurantItem;
