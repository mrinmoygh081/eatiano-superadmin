import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tax } from '../../context/taxContext';

const TaxItem = ({ taxData }) => {
  const taxCtx = useContext(Tax);

  const deleteTax = () => {
    taxCtx.deleteTax(taxData.tax_id);
  };

  return (
    <div className='p-6 transition-all duration-200 rounded-lg shadow-lg bg-secondary hover:-translate-y-3'>
      <h6 className='mb-5 text-lg text-center text-gray-100 lg:mb-8 lg:text-xl'>
        State Name:{' '}
        <span className='font-medium text-cta-dark'>{taxData.state}</span>
      </h6>

      <h6 className='mb-4 text-center text-gray-200'>
        CGST: <span className='font-medium text-border'>{taxData.cgst} %</span>
      </h6>

      <h6 className='mb-4 text-center text-gray-200'>
        SGST: <span className='font-medium text-border'>{taxData.sgst} %</span>
      </h6>

      <h6 className='mb-4 text-center text-gray-200'>
        Total Tax:{' '}
        <span className='font-medium text-brand-text'>{taxData.total} %</span>
      </h6>

      <div className='flex items-center justify-around mt-5'>
        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteTax}
        >
          Delete
        </button>

        <Link
          to={`/editTax/${taxData.tax_id}`}
          className='text-border hover:text-brand-text'
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default TaxItem;
