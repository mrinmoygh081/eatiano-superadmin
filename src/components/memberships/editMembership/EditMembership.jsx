import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Auth } from '../../../context/authContext';

const EditMembership = () => {
  const [editMembership, setEditMembership] = useState({
    membershipType: '',
    membershipPrice: '',
    timePeriod: '',
    discountPercent: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const membershipData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/membership/${id}`,
        config
      );

      const resData = response.data.data;
      setEditMembership({
        membershipType: resData.membership_type_name,
        membershipPrice: resData.membership_price,
        timePeriod: resData.time_period,
        discountPercent: resData.discount_percent,
      });
    };

    membershipData();
  }, []);

  const editMembershipHandler = (e) => {
    setEditMembership({ ...editMembership, [e.target.name]: e.target.value });
  };

  const editMembershipSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('membership_type_name', editMembership.membershipType);
    formData.append('membership_price', editMembership.membershipPrice);
    formData.append('time_period', editMembership.timePeriod);
    formData.append('discount_percent', editMembership.discountPercent);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/membership/${id}`,
      formData,
      config
    );

    setEditMembership({
      membershipType: '',
      membershipPrice: '',
      timePeriod: '',
      discountPercent: '',
    });

    const resData = response.data;
    console.log(resData);
    history('/memberships', { replace: true });
    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Membership
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editMembershipSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Membership Type Name*</label>
              </h6>
              <input
                type='text'
                required
                name='membershipType'
                value={editMembership.membershipType}
                onChange={editMembershipHandler}
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
                value={editMembership.membershipPrice}
                onChange={editMembershipHandler}
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
                value={editMembership.discountPercent}
                onChange={editMembershipHandler}
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
                value={editMembership.timePeriod}
                onChange={editMembershipHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Membership
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMembership;
