import React from 'react';
import Agent from './Agent';

const DeliveryAgentsList = ({ allAgents }) => {
  const agentsList = allAgents.map((agent) => {
    return <Agent key={agent.id} agent={agent} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {agentsList}
    </div>
  );
};

export default DeliveryAgentsList;
