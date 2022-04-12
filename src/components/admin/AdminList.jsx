import React from 'react';
import AdminItem from './AdminItem';

const AdminList = ({ allAdmins }) => {
  const adminList = allAdmins.map((admin) => {
    return <AdminItem key={admin.id} admin={admin} />;
  });

  return (
    <div className='container grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-3 md:grid-cols-2 place-content-center place-items-center'>
      {adminList}
    </div>
  );
};

export default AdminList;
