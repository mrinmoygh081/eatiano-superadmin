import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Restaurants } from '../../context/restaurantsContext';
import RestaurantList from './RestaurantList';

const AllRestaurants = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const restaurants = useContext(Restaurants);
  const allRestaurants = restaurants.allRestaurants;

  const searchRef = useRef();

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredRestaurants = allRestaurants.filter((restaurant) => {
        return Object.values(restaurant)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredRestaurants);
    } else {
      setSearchResults(allRestaurants);
    }
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <h2 className='mb-10 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-16'>
        All Restaurants
      </h2>

      <div className='grid gap-2 md:gap-6 md:grid-cols-4 lg:grid-cols-7 md:place-content-center md:place-items-center'>
        <div className='w-full md:col-span-2 lg:col-span-5'>
          <form onSubmit={searchFormHandler}>
            <input
              type='text'
              placeholder='Search Restaurants By Name Or Area...'
              className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              ref={searchRef}
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>
        </div>

        <div className='md:col-span-2 lg:col-span-2'>
          <Link to='/restaurants/add'>
            <button className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:w-auto hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Add New Restaurant
            </button>
          </Link>
        </div>
      </div>

      <RestaurantList
        allRestaurants={searchTerm.length < 1 ? allRestaurants : searchResults}
      />
    </div>
  );
};

export default AllRestaurants;
