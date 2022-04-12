import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../../context/authContext';

const AddMembership = () => {
  const [newMembership, setNewMembership] = useState({
    membershipType: '',
    membershipPrice: '',
    timePeriod: '',
    discountPercent: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const newMembershipHandler = (e) => {
    setNewMembership({ ...newMembership, [e.target.name]: e.target.value });
  };

  const addNewMembership = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append('membership_type_name', newMembership.membershipType);
    formData.append('membership_price', newMembership.membershipPrice);
    formData.append('time_period', newMembership.timePeriod);
    formData.append('discount_percent', newMembership.discountPercent);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/membership',
      formData,
      config
    );

    setNewMembership({
      membershipType: '',
      membershipPrice: '',
      timePeriod: '',
      discountPercent: '',
    });

    const resData = await response.data;
    console.log(resData);

    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Add New Membership Type
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={addNewMembership}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Membership Type*</label>
              </h6>
              <input
                type='text'
                required
                name='membershipType'
                value={newMembership.membershipType}
                onChange={newMembershipHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Membership Price*</label>
              </h6>
              <input
                type='number'
                name='membershipPrice'
                value={newMembership.membershipPrice}
                onChange={newMembershipHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Time Period*</label>
              </h6>
              <input
                type='number'
                name='timePeriod'
                value={newMembership.timePeriod}
                onChange={newMembershipHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Discount Percent*</label>
              </h6>
              <input
                type='number'
                name='discountPercent'
                value={newMembership.discountPercent}
                onChange={newMembershipHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Add Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMembership;
