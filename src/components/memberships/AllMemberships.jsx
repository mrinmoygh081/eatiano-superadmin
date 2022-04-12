import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Memberships } from '../../context/membershipContext';
import MembershipList from './MembershipList';

const AllMemberships = () => {
  const memberships = useContext(Memberships);
  const allMemberships = memberships.memberships;

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <div className='flex flex-wrap items-center justify-between'>
        <h2 className='text-gray-100 lg:text-left md:text-2xl lg:text-3xl'>
          All Memberships
        </h2>

        <div>
          <Link to='/memberships/add'>
            <button className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:w-auto hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Add New Membership
            </button>
          </Link>
        </div>
      </div>

      <MembershipList allMemberships={allMemberships} />
    </div>
  );
};

export default AllMemberships;
