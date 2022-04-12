import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Auth } from '../../../context/authContext';

const EditRestaurant = () => {
  const [editRestaurant, setEditRestaurant] = useState({
    name: '',
    phone: '',
    address: '',
    lat: '',
    long: '',
    metaData: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const [restaurantImg, setRestaurantImg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const restaurantData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/edit_restaurant/${id}`,
        config
      );

      const resData = response.data.data;
      setEditRestaurant({
        name: resData.restaurant_name,
        phone: resData.restaurant_ph,
        address: resData.restaurant_address,
        lat: resData.lat,
        long: resData.lng,
        metaData: resData.restaurant_meta_deta,
      });
    };

    restaurantData();
  }, []);

  const editRestaurantHandler = (e) => {
    setEditRestaurant({ ...editRestaurant, [e.target.name]: e.target.value });
  };

  const editRestaurantSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('restaurant_image', restaurantImg);
    formData.append('restaurant_name', editRestaurant.name);
    formData.append('restaurant_ph', editRestaurant.phone);
    formData.append('restaurant_address', editRestaurant.address);
    formData.append('lat', editRestaurant.lat);
    formData.append('lng', editRestaurant.long);
    formData.append('restaurant_meta_deta', editRestaurant.metaData);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/edit_restaurant/${id}`,
      formData,
      config
    );

    setEditRestaurant({
      name: '',
      phone: '',
      address: '',
      lat: '',
      long: '',
      metaData: '',
    });
    setRestaurantImg(null);

    const resData = await response.data;
    console.log(resData);
    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Restaurant
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editRestaurantSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Restaurant Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={editRestaurant.name}
                onChange={editRestaurantHandler}
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
                value={editRestaurant.phone}
                onChange={editRestaurantHandler}
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
                value={editRestaurant.lat}
                onChange={editRestaurantHandler}
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
                onChange={editRestaurantHandler}
                value={editRestaurant.long}
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
                value={editRestaurant.metaData}
                onChange={editRestaurantHandler}
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
                  setRestaurantImg(e.target.files[0]);
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
                onChange={editRestaurantHandler}
                value={editRestaurant.address}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Restaurant
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRestaurant;
