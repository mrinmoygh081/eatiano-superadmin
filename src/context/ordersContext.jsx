import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Orders = createContext({
  orders: '',
});

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState('');
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  useEffect(() => {
    const getOrders = async () => {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const today = new Date().toISOString().slice(0, 10);

      const res = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/all_order/${today}`,
        config
      );

      const resData = res.data.data;
      console.log(resData);
      setOrders(resData);
    };

    getOrders();
  }, []);

  console.log(orders);

  const ordersValue = {
    orders: orders,
  };

  return <Orders.Provider value={ordersValue}>{children}</Orders.Provider>;
};

export default OrdersProvider;
