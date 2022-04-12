import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Coupons = createContext({
  allCoupons: [],
  deleteCoupon: (id) => {},
});

const CouponsProvider = ({ children }) => {
  const [allCoupons, setAllCoupons] = useState([]);

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteCoupon = (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/coupon/${id}`,
      config
    );

    const filteredCoupons = allCoupons.filter(
      (coupon) => coupon.coupon_id !== id
    );
    setAllCoupons(filteredCoupons);
  };

  useEffect(() => {
    const getAllCoupons = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/coupon',
        config
      );

      const resData = await response.data;
      console.log(resData.data);
      setAllCoupons(resData.data);
    };

    getAllCoupons();
  }, []);

  const couponsCtx = {
    allCoupons: allCoupons,
    deleteCoupon: deleteCoupon,
  };

  return <Coupons.Provider value={couponsCtx}>{children}</Coupons.Provider>;
};

export default CouponsProvider;
