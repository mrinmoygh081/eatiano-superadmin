import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Auth } from '../../../context/authContext';

const EditCoupon = () => {
  const [editCoupon, setEditCoupon] = useState({
    couponCode: '',
    discount: '',
    condition: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const couponData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/coupon/${id}`,
        config
      );

      const resData = response.data.data;
      setEditCoupon({
        couponCode: resData.coupon_code,
        discount: resData.discount,
        condition: resData.condition,
      });
    };

    couponData();
  }, []);

  const editCouponHandler = (e) => {
    setEditCoupon({ ...editCoupon, [e.target.name]: e.target.value });
  };

  const editCouponSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('coupon_code', editCoupon.couponCode);
    formData.append('discount', editCoupon.discount);
    formData.append('condition', editCoupon.condition);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/coupon/${id}`,
      formData,
      config
    );

    setEditCoupon({
      couponCode: '',
      discount: '',
      condition: '',
    });

    const resData = response.data;
    console.log(resData);
    history('/coupons', { replace: true });
    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Coupon
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editCouponSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Coupon Code*</label>
              </h6>
              <input
                type='text'
                required
                name='couponCode'
                value={editCoupon.couponCode}
                onChange={editCouponHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Coupon Discount*</label>
              </h6>
              <input
                type='number'
                name='discount'
                value={editCoupon.discount}
                onChange={editCouponHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Meta Data*</label>
              </h6>
              <input
                type='text'
                required
                name='condition'
                value={editCoupon.condition}
                onChange={editCouponHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCoupon;
