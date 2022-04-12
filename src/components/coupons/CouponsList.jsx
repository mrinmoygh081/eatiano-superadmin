import React from 'react';
import CouponItem from './CouponItem';

const CouponsList = ({ allCoupons }) => {
  const couponsList = allCoupons.map((coupon) => {
    return <CouponItem key={coupon.coupon_id} couponData={coupon} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {couponsList}
    </div>
  );
};

export default CouponsList;
