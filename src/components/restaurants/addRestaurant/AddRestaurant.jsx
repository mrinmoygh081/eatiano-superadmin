import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../../context/authContext';

const AddRestaurant = () => {
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    address: '',
    phone: '',
    lat: '',
    long: '',
    metaData: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const [restaurantImage, setRestaurantImage] = useState(null);

  const newRestaurantHandler = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const addNewRestaurant = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append('restaurant_image', restaurantImage);
    formData.append('restaurant_name', newRestaurant.name);
    formData.append('restaurant_ph', newRestaurant.phone);
    formData.append('restaurant_address', newRestaurant.address);
    formData.append('lat', newRestaurant.lat);
    formData.append('lng', newRestaurant.long);
    formData.append('restaurant_meta_deta', newRestaurant.metaData);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/add_restaurant',
      formData,
      config
    );

    setNewRestaurant({
      name: '',
      phone: '',
      address: '',
      lat: '',
      long: '',
      metaData: '',
    });
    setRestaurantImage(null);

    const resData = await response.data;
    console.log(resData);
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Add New Restaurant
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={addNewRestaurant}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={newRestaurant.name}
                onChange={newRestaurantHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Phone*</label>
              </h6>
              <input
                type='number'
                name='phone'
                value={newRestaurant.phone}
                onChange={newRestaurantHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Latitude*</label>
              </h6>
              <input
                type='number'
                name='lat'
                value={newRestaurant.lat}
                onChange={newRestaurantHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Longitude*</label>
              </h6>
              <input
                type='number'
                required
                name='long'
                onChange={newRestaurantHandler}
                value={newRestaurant.long}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Meta Data*</label>
              </h6>
              <input
                type='text'
                required
                name='metaData'
                value={newRestaurant.metaData}
                onChange={newRestaurantHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Image*</label>
              </h6>
              <input
                type='file'
                required
                accept='image/*'
                name='restaurant_image'
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setRestaurantImage(e.target.files[0]);
                }}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Address*</label>
              </h6>
              <textarea
                cols='30'
                rows='3'
                name='address'
                onChange={newRestaurantHandler}
                value={newRestaurant.address}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Add Restaurant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
