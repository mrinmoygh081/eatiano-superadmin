import React, { useState, useContext } from 'react';
import { Auth } from '../../context/authContext';
import axios from 'axios';

const OtherStats = () => {
  const [monthlySale, setMonthlySale] = useState({
    month: '',
    year: '',
  });

  const [monthlySaleData, setMonthlySaleData] = useState('');

  const [revenue, setRevenue] = useState({
    startDate: '',
    endDate: '',
  });

  const [revenueData, setRevenueData] = useState('');

  const [profitRange, setProfitRange] = useState({
    start: '',
    end: '',
  });

  const [profitPercent, setProfitPercent] = useState('');

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const monthlySaleHandler = (e) => {
    setMonthlySale({ ...monthlySale, [e.target.name]: e.target.value });
  };

  const getMonthlySale = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new FormData();
    formData.append('month', monthlySale.month);
    formData.append('year', monthlySale.year);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/monthly_sell',
      formData,
      config
    );

    setMonthlySale({
      month: '',
      year: '',
    });

    const resData = await response.data;
    console.log(resData);

    setMonthlySaleData(resData.data);
  };

  const revenueHandler = (e) => {
    setRevenue({ ...revenue, [e.target.name]: e.target.value });
  };

  const profitRangeHandler = (e) => {
    setProfitRange({ ...profitRange, [e.target.name]: e.target.value });
  };

  const getRevenue = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new FormData();
    formData.append('start_date', revenue.startDate);
    formData.append('end_date', revenue.endDate);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/revenue_range',
      formData,
      config
    );

    setRevenue({
      startDate: '',
      endDate: '',
    });

    const resData = await response.data;
    console.log(resData);

    setRevenueData(resData.data);
  };

  const getProfit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new FormData();
    formData.append('start_date', profitRange.startDate);
    formData.append('end_date', profitRange.endDate);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/profit_range',
      formData,
      config
    );

    setProfitRange({
      start: '',
      end: '',
    });

    const resData = await response.data;
    console.log(resData.profit);

    setProfitPercent(resData.profit);
  };

  // console.log(profitPercent);

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <div className='grid gap-2 md:gap-12 md:grid-cols-4 lg:grid-cols-9 md:place-content-center md:place-items-center'>
        <div className='w-full md:col-span-2 lg:col-span-3'>
          <h1 className='mb-6 text-xl text-gray-200 lg:mb-10 lg:text-2xl'>
            Get Monthly Sales Data
          </h1>
          <form onSubmit={getMonthlySale}>
            <input
              type='number'
              placeholder='Add Month...'
              className='w-full px-4 py-2 mb-4 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              name='month'
              value={monthlySale.month}
              onChange={monthlySaleHandler}
            />

            <input
              type='number'
              placeholder='Add Year...'
              name='year'
              className='w-full px-4 py-2 mb-4 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              onChange={monthlySaleHandler}
              value={monthlySale.year}
            />

            <button
              type='submit'
              className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
              Get Data
            </button>
          </form>

          <div className='px-5 py-8 my-10 rounded-lg bg-secondary'>
            <h6 className='text-lg text-gray-200 lg:text-xl'>
              Total Monthly Sale:{' '}
              <span className='font-medium text-cta-dark'>
                {monthlySaleData}
              </span>
            </h6>
          </div>
        </div>

        <div className='w-full md:col-span-2 lg:col-span-3'>
          <h1 className='mb-6 text-xl text-gray-200 lg:mb-10 lg:text-2xl'>
            Get Revenue For A Date Range
          </h1>
          <form onSubmit={getRevenue}>
            <input
              type='text'
              placeholder='Start Date in YYYY-MM-DD Format'
              className='w-full px-4 py-2 mb-4 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              name='startDate'
              value={revenue.startDate}
              onChange={revenueHandler}
            />

            <input
              type='text'
              placeholder='End Date in YYYY-MM-DD Format'
              className='w-full px-4 py-2 mb-4 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              name='endDate'
              value={revenue.endDate}
              onChange={revenueHandler}
            />

            <button
              type='submit'
              className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
              Get Data
            </button>
          </form>

          <div className='px-5 py-8 my-10 rounded-lg bg-secondary'>
            <h6 className='text-lg text-gray-200 lg:text-xl'>
              Total Revenue:{' '}
              <span className='font-medium text-cta-dark'>
                Rs. {revenueData}
              </span>
            </h6>
          </div>
        </div>

        <div className='w-full md:col-span-2 lg:col-span-3'>
          <h1 className='mb-6 text-xl text-gray-200 lg:mb-10 lg:text-2xl'>
            Get Profit For A Date Range
          </h1>
          <form onSubmit={getProfit}>
            <input
              type='text'
              placeholder='Start Date in YYYY-MM-DD Format'
              className='w-full px-4 py-2 mb-4 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              name='startDate'
              value={profitRange.startDate}
              onChange={profitRangeHandler}
            />

            <input
              type='text'
              placeholder='End Date in YYYY-MM-DD Format'
              className='w-full px-4 py-2 mb-4 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              name='endDate'
              value={profitRange.endDate}
              onChange={profitRangeHandler}
            />

            <button
              type='submit'
              className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
              Get Data
            </button>
          </form>

          <div className='px-5 py-8 my-10 rounded-lg bg-secondary'>
            <h6 className='text-lg text-gray-200 lg:text-xl'>
              Total Profit:{' '}
              <span className='font-medium text-cta-dark'>
                Rs. {profitPercent}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherStats;
