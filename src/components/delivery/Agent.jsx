import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Agents } from '../../context/deliveryContext';

const Agent = ({ agent }) => {
  const agentImageSrc = `https://achievexsolutions.in/current_work/eatiano${agent.idprof}`;
  const agentsCtx = useContext(Agents);

  const deleteAgent = () => {
    agentsCtx.deleteAgent(agent.id);
  };

  return (
    <div>
      <div>
        <img
          src={agentImageSrc}
          alt=''
          className='w-full mb-6 rounded-xl md:mb-8'
        />
      </div>

      <h6 className='mb-3 text-lg font-medium text-center text-gray-100 lg:text-xl'>
        {agent.name}
      </h6>

      <h6 className='mb-4 font-medium text-center text-gray-200'>
        {agent.email}
      </h6>
      <p className='mb-4 leading-relaxed text-center text-gray-200 md:mb-5'>
        {agent.phone}
      </p>

      <p className='mb-4 leading-relaxed text-center text-gray-200 md:mb-5'>
        Aadhar No: {agent.adhar}
      </p>

      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        {agent.address}
      </p>

      <div className='flex flex-wrap items-center justify-between'>
        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteAgent}
        >
          <i className='fa fa-trash'></i> Delete Agent
        </button>

        <Link
          to={`/deliveryAgent/${agent.id}`}
          className='text-blue-300 hover:text-blue-500'
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Agent;
