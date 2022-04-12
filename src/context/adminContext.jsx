import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Admin = createContext({
  allAdmin: [],
  deleteAdmin: (id) => {},
});

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteAdmin = async (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/admin/${id}`,
      config
    );

    const filteredAdmin = admin.filter((admin) => admin.id !== id);
    setAdmin(filteredAdmin);
  };

  useEffect(() => {
    const getAdmin = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/admin`,
        config
      );

      const resData = response.data.data;
      setAdmin(resData);
    };

    getAdmin();
  }, []);

  console.log(admin);

  const adminValue = {
    allAdmin: admin,
    deleteAdmin: deleteAdmin,
  };

  return <Admin.Provider value={adminValue}>{children}</Admin.Provider>;
};

export default AdminProvider;
