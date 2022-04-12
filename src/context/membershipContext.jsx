import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Memberships = createContext({
  memberships: [],
  deleteMembership: (id) => {},
});

const MembershipsProvider = ({ children }) => {
  const [memberships, setMemberships] = useState([]);

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteMembership = (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/membership/${id}`,
      config
    );

    const filteredMemberships = memberships.filter(
      (membership) => membership.membership_type_id !== id
    );
    setMemberships(filteredMemberships);
  };

  useEffect(() => {
    const getAllMembership = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/membership',
        config
      );

      const resData = await response.data;
      console.log(resData.data);
      setMemberships(resData.data);
    };

    getAllMembership();
  }, []);

  const membershipCtx = {
    memberships: memberships,
    deleteMembership: deleteMembership,
  };

  return (
    <Memberships.Provider value={membershipCtx}>
      {children}
    </Memberships.Provider>
  );
};

export default MembershipsProvider;
