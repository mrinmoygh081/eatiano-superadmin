import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Warehouse = createContext({
  warehouse: [],
});

const WarehouseProvider = ({ children }) => {
  const [warehouse, setWarehouse] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  useEffect(() => {
    const getWarehouse = async () => {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/warehouse',
        config
      );

      const resData = res.data.data;
      console.log(resData);
      setWarehouse(resData);
    };

    getWarehouse();
  }, []);

  const warehouseValue = {
    warehouse: warehouse,
  };

  return (
    <Warehouse.Provider value={warehouseValue}>{children}</Warehouse.Provider>
  );
};

export default WarehouseProvider;
