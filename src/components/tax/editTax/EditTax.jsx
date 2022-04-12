import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Auth } from '../../../context/authContext';

const EditTax = () => {
  const [editTax, setEditTax] = useState({
    name: '',
    cgst: '',
    sgst: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const taxData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/tax/${id}`,
        config
      );

      const resData = response.data.data;
      setEditTax({
        name: resData.state,
        cgst: resData.cgst,
        sgst: resData.sgst,
      });
    };

    taxData();
  }, []);

  const editTaxHandler = (e) => {
    setEditTax({ ...editTax, [e.target.name]: e.target.value });
  };

  const editTaxSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('state', editTax.name);
    formData.append('sgst', editTax.sgst);
    formData.append('cgst', editTax.cgst);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/tax/${id}`,
      formData,
      config
    );

    setEditTax({
      name: '',
      cgst: '',
      sgst: '',
    });

    const resData = response.data;
    console.log(resData);
    history('/taxes', { replace: true });
    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Tax
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editTaxSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>State Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={editTax.name}
                onChange={editTaxHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>CGST Percent*</label>
              </h6>
              <input
                type='number'
                name='cgst'
                value={editTax.cgst}
                onChange={editTaxHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>SGST Percent*</label>
              </h6>
              <input
                type='number'
                name='sgst'
                value={editTax.sgst}
                onChange={editTaxHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Tax
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTax;
