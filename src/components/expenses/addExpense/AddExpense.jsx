import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../../context/authContext';

const AddExpense = () => {
  const [newExpense, setNewExpense] = useState({
    name: '',
    amount: '',
    timePeriod: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const newExpenseHandler = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addNewExpense = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new FormData();
    formData.append('name', newExpense.name);
    formData.append('amount', newExpense.amount);
    formData.append('time_period', newExpense.timePeriod);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/expenses',
      formData,
      config
    );

    setNewExpense({
      name: '',
      amount: '',
      timePeriod: '',
    });

    const resData = await response.data;
    console.log(resData);

    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Add New Expense
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={addNewExpense}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Expense Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={newExpense.name}
                onChange={newExpenseHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Expense Amount*</label>
              </h6>
              <input
                type='number'
                name='amount'
                value={newExpense.amount}
                onChange={newExpenseHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Time Period (Days)*</label>
              </h6>
              <input
                type='number'
                required
                name='timePeriod'
                value={newExpense.timePeriod}
                onChange={newExpenseHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
