import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Admin } from '../../context/adminContext';

const AdminItem = ({ admin }) => {
  const adminCtx = useContext(Admin);

  const deleteAdmin = () => {
    adminCtx.deleteAdmin(admin.id);
  };

  return (
    <div className='p-6 transition-all duration-200 rounded-lg shadow-lg bg-secondary hover:-translate-y-3'>
      <h6 className='mb-5 text-xl font-medium text-center text-gray-100 lg:mb-8 lg:text-2xl'>
        {admin.name}
      </h6>

      <h6 className='mb-4 text-center text-cta-dark'>{admin.email}</h6>
      <p className='mb-4 leading-relaxed text-center text-gray-200 md:mb-5'>
        {admin.phone}
      </p>

      <p className='mb-4 leading-relaxed text-center text-gray-200 md:mb-5'>
        Country: <span className='text-brand-text'>{admin.country}</span>
      </p>

      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        Created At: {admin.created_at}
      </p>

      <button
        className='text-brand-text hover:text-red-600'
        onClick={deleteAdmin}
      >
        <i className='fa fa-trash'></i> Delete
      </button>

      {/* <div className='flex items-center justify-around'>
        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteAdmin}
        >
          <i className='fa fa-trash'></i> Delete
        </button>

        <Link to={`/admin/warehouse/${admin.id}`}>
          <button className='text-blue-300 hover:text-blue-500'>View</button>
        </Link>
      </div> */}
    </div>
  );
};

export default AdminItem;
