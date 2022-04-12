import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../../context/authContext';

const AddDelivery = () => {
  const [newDelivery, setNewDelivery] = useState({
    name: '',
    country: '',
    address: '',
    phone: '',
    email: '',
    aadhar: '',
    password: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  // console.log(images[1]);

  const newDeliveryHandler = (e) => {
    setNewDelivery({ ...newDelivery, [e.target.name]: e.target.value });
  };

  const addNewDelivery = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new FormData();
    formData.append('name', newDelivery.name);
    formData.append('address', newDelivery.address);
    formData.append('phone', newDelivery.phone);
    formData.append('email', newDelivery.email);
    formData.append('adhar', newDelivery.aadhar);
    formData.append('password', newDelivery.password);
    formData.append('country', newDelivery.country);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/delivery',
      formData,
      config
    );

    setNewDelivery({
      name: '',
      country: '',
      address: '',
      phone: '',
      email: '',
      aadhar: '',
      password: '',
    });

    const resData = response.data;
    console.log(resData);

    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Add New Delivery Agent
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={addNewDelivery}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Agent Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={newDelivery.name}
                onChange={newDeliveryHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Agent Phone*</label>
              </h6>
              <input
                type='number'
                name='phone'
                value={newDelivery.phone}
                onChange={newDeliveryHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Aadhar Number*</label>
              </h6>
              <input
                type='number'
                name='aadhar'
                value={newDelivery.aadhar}
                onChange={newDeliveryHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Agent Email*</label>
              </h6>
              <input
                type='email'
                required
                name='email'
                onChange={newDeliveryHandler}
                value={newDelivery.email}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Password*</label>
              </h6>
              <input
                type='password'
                required
                name='password'
                value={newDelivery.password}
                onChange={newDeliveryHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Country*</label>
              </h6>
              <input
                type='text'
                required
                name='country'
                value={newDelivery.country}
                onChange={newDeliveryHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Address*</label>
              </h6>
              <textarea
                cols='30'
                rows='3'
                name='address'
                onChange={newDeliveryHandler}
                value={newDelivery.address}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Add Delivery Agent
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDelivery;
