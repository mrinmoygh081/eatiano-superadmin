import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Memberships } from '../../context/membershipContext';

const MembershipItem = ({ membershipData }) => {
  const membershipsCtx = useContext(Memberships);

  const deleteMembership = () => {
    membershipsCtx.deleteMembership(membershipData.membership_type_id);
  };

  return (
    <div className='p-6 transition-all duration-200 rounded-lg shadow-lg bg-secondary hover:-translate-y-3'>
      <h6 className='mb-3 text-lg font-medium text-center text-gray-100 lg:text-xl'>
        {membershipData.membership_type_name}
      </h6>
      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Price: {membershipData.membership_price}
      </h6>

      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Time Period: {membershipData.time_period}
      </h6>

      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Discount: {membershipData.discount_percent}
      </h6>

      <div className='flex items-center justify-around mt-5'>
        <Link
          to={`/editMembership/${membershipData.membership_type_id}`}
          className='text-border hover:text-brand-text'
        >
          Edit
        </Link>

        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteMembership}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MembershipItem;
