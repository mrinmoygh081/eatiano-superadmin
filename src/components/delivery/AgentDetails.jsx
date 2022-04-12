import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Auth } from '../../context/authContext';

const AgentDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const history = useNavigate();

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  useEffect(() => {
    const getDetails = async () => {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/delivery/${id}`,
        config
      );

      const resData = res.data.data;
      setDetails(resData);
    };

    getDetails();
  }, []);

  const approveAgent = async () => {
    const formData = new URLSearchParams();
    formData.append('status', 'Approved');
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/delivery/${id}`,
      formData,
      config
    );

    const resData = await res.data;
    console.log(resData);
    history('/deliveryAgents', { replace: true });
    window.location.reload();
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <h1 className='mb-10 text-3xl text-gray-200 lg:text-4xl lg:mb-16 lg:text-center'>
        Agent Details
      </h1>
      <div className='max-w-3xl px-12 mx-auto rounded-lg shadow-xl py-14 bg-secondary'>
        <div className='flex flex-wrap items-center justify-between gap-6 mb-10'>
          <h6 className='text-lg text-gray-300 lg:text-xl'>
            Name: <span className='text-brand-text'>{details.name}</span>
          </h6>

          <h6 className='text-lg text-gray-300 lg:text-xl'>
            Email: <span className='text-brand-text'>{details.email}</span>
          </h6>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-6 mb-10'>
          <h6 className='text-lg text-gray-300 lg:text-xl'>
            Phone: <span className='text-brand-text'>{details.phone}</span>
          </h6>

          <h6 className='text-lg text-gray-300 lg:text-xl'>
            Country: <span className='text-brand-text'>{details.country}</span>
          </h6>

          <h6 className='text-lg text-gray-300 lg:text-xl'>
            Aadhar: <span className='text-brand-text'>{details.adhar}</span>
          </h6>
        </div>

        <h6 className='text-lg text-gray-300 lg:text-xl'>
          Address: <span className='text-brand-text'>{details.address}</span>
        </h6>

        {details.status === 'Not Approved' ? (
          <button
            onClick={approveAgent}
            className='mt-10 text-green-300 hover:text-cta-dark'
          >
            Approve
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AgentDetails;
