import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Restaurants = createContext({
  allRestaurants: [],
});

const RestaurantsProvider = ({ children }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  useEffect(() => {
    const getAllRestaurants = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/all_restaurant',
        config
      );

      const resData = await response.data;
      console.log(resData.data);
      setAllRestaurants(resData.data);
    };

    getAllRestaurants();
  }, []);

  const restaurantCtx = {
    allRestaurants: allRestaurants,
  };

  return (
    <Restaurants.Provider value={restaurantCtx}>
      {children}
    </Restaurants.Provider>
  );
};

export default RestaurantsProvider;
