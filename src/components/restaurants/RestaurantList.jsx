import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ allRestaurants }) => {
  const restaurantsList = allRestaurants.map((restaurant) => {
    return (
      <RestaurantItem
        key={restaurant.restaurant_id}
        restaurantData={restaurant}
      />
    );
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {restaurantsList}
    </div>
  );
};

export default RestaurantList;
