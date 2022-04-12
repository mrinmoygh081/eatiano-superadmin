import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Tax = createContext({
  tax: [],
  deleteTax: (id) => {},
});

const TaxProvider = ({ children }) => {
  const [tax, setTax] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteTax = (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/tax/${id}`,
      config
    );

    const filteredTax = tax.filter((tax) => tax.tax_id !== id);
    setTax(filteredTax);
  };

  useEffect(() => {
    const getTax = async () => {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/tax',
        config
      );

      const resData = res.data.data;
      console.log(resData);
      setTax(resData);
    };

    getTax();
  }, []);

  console.log(tax);

  const taxValue = {
    tax: tax,
    deleteTax: deleteTax,
  };

  return <Tax.Provider value={taxValue}>{children}</Tax.Provider>;
};

export default TaxProvider;
