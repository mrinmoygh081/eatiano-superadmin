import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Coupons } from '../../context/couponContext';

const CouponItem = ({ couponData }) => {
  const couponsCtx = useContext(Coupons);

  const deleteCoupon = () => {
    couponsCtx.deleteCoupon(couponData.coupon_id);
  };

  return (
    <div className='p-6 transition-all duration-200 rounded-lg shadow-lg bg-secondary hover:-translate-y-3'>
      <h6 className='mb-5 text-xl font-medium text-center text-gray-100 lg:mb-8 lg:text-2xl'>
        {couponData.coupon_code}
      </h6>
      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Discount: <span className='text-border'>{couponData.discount} %</span>
      </h6>
      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        Coupon Applies When Order Amount is greater than{' '}
        <span className='text-cta-dark'>{couponData.condition} Rupees</span>
      </p>

      <div className='flex items-center justify-around mt-5'>
        <Link
          to={`/editCoupon/${couponData.coupon_id}`}
          className='text-border hover:text-brand-text'
        >
          Edit
        </Link>

        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteCoupon}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CouponItem;
