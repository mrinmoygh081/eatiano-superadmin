import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from '../UI/DashboardCard';
import { Restaurants } from '../../context/restaurantsContext';
import { Blogs } from '../../context/blogsContext';
import { Coupons } from '../../context/couponContext';
import { Memberships } from '../../context/membershipContext';
import { Agents } from '../../context/deliveryContext';
import { Expenses } from '../../context/expensesContext';
import { Admin } from '../../context/adminContext';
import { Warehouse } from '../../context/warehouseContext';
import { Orders } from '../../context/ordersContext';

const DashboardStats = () => {
  const restaurantsCtx = useContext(Restaurants);
  const restaurants = restaurantsCtx.allRestaurants;

  const blogsCtx = useContext(Blogs);
  const blogs = blogsCtx.blogs;

  const couponsCtx = useContext(Coupons);
  const coupons = couponsCtx.allCoupons;

  const membershipsCtx = useContext(Memberships);
  const memberships = membershipsCtx.memberships;

  const expensesCtx = useContext(Expenses);
  const expenses = expensesCtx.expenses;

  const adminCtx = useContext(Admin);
  const admin = adminCtx.allAdmin;

  const warehouseCtx = useContext(Warehouse);
  const warehouse = warehouseCtx.warehouse;

  const agentsCtx = useContext(Agents);
  const agents = agentsCtx.allAgents;

  const ordersCtx = useContext(Orders);
  const orders = ordersCtx.orders;

  return (
    <div className='container grid gap-16 my-16 font-rubik md:grid-cols-2 lg:grid-cols-4 md:place-content-center place-items-center md:my-24 lg:my-32'>
      <Link
        to='/memberships'
        className='w-full transition-all duration-200 bg-green-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={memberships.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-green-900 text-center'
          type='Membership Types'
          typeStyle='text-xl lg:text-2xl text-green-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/restaurants'
        className='w-full transition-all duration-200 bg-red-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={`${restaurants.length}`}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-red-900 text-center'
          type='Restaurants'
          typeStyle='text-xl lg:text-2xl text-red-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/blogs'
        className='w-full transition-all duration-200 bg-yellow-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={blogs.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-yellow-900 text-center'
          type='Blogs'
          typeStyle='text-xl lg:text-2xl text-yellow-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/coupons'
        className='w-full transition-all duration-200 bg-blue-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={coupons.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-blue-900 text-center'
          type='Coupons'
          typeStyle='text-xl lg:text-2xl text-blue-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/deliveryAgents'
        className='w-full transition-all duration-200 bg-blue-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={agents.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-blue-900 text-center'
          type='Delivery Partners'
          typeStyle='text-xl lg:text-2xl text-blue-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/expenses'
        className='w-full transition-all duration-200 bg-blue-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={expenses.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-blue-900 text-center'
          type='Expenses'
          typeStyle='text-xl lg:text-2xl text-blue-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/admins'
        className='w-full transition-all duration-200 bg-red-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={admin.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-red-900 text-center'
          type='Admin'
          typeStyle='text-xl lg:text-2xl text-red-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/warehouses'
        className='w-full transition-all duration-200 bg-yellow-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={warehouse.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-yellow-900 text-center'
          type='Warehouse'
          typeStyle='text-xl lg:text-2xl text-yellow-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/'
        className='w-full transition-all duration-200 bg-green-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={orders}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-green-900 text-center'
          type={`Today's Orders`}
          typeStyle='text-xl lg:text-2xl text-green-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/otherStats'
        className='w-full transition-all duration-200 bg-green-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures='Other Stats'
          figureStyle='text-xl lg:text-2xl font-semibold mb-3 md:mb-5 text-green-900 text-center'
          type={`Click to view`}
          typeStyle='lg:text-lg text-green-700 text-center font-medium'
        />
      </Link>

      <Link
        to='/taxes'
        className='w-full transition-all duration-200 bg-green-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures='Tax Details'
          figureStyle='text-xl lg:text-2xl font-semibold mb-3 md:mb-5 text-green-900 text-center'
          type={`Click to view`}
          typeStyle='lg:text-lg text-green-700 text-center font-medium'
        />
      </Link>
    </div>
  );
};

export default DashboardStats;
