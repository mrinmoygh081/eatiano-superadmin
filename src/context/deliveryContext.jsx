import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Agents = createContext({
  allAgents: [],
  deleteAgent: (id) => {},
});

const AgentsProvider = ({ children }) => {
  const [deliveryAgents, setDeliveryAgents] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteAgent = async (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/delivery/${id}`,
      config
    );

    const filteredAgents = deliveryAgents.filter((agent) => agent.id !== id);
    setDeliveryAgents(filteredAgents);
  };

  useEffect(() => {
    const getAgents = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/delivery`,
        config
      );

      const resData = response.data.data;
      setDeliveryAgents(resData);
    };

    getAgents();
  }, []);

  console.log(deliveryAgents);

  const agentValue = {
    allAgents: deliveryAgents,
    deleteAgent: deleteAgent,
  };

  return <Agents.Provider value={agentValue}>{children}</Agents.Provider>;
};

export default AgentsProvider;
