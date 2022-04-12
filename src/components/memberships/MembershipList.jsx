import React from 'react';
import MembershipItem from './MembershipItem';

const MembershipList = ({ allMemberships }) => {
  const membershipsList = allMemberships.map((membership) => {
    return (
      <MembershipItem
        key={membership.membership_type_id}
        membershipData={membership}
      />
    );
  });

  return (
    <div className='grid gap-8 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 '>
      {membershipsList}
    </div>
  );
};

export default MembershipList;
