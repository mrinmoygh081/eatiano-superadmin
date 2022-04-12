import React from 'react';
import TaxItem from './TaxItem';

const TaxList = ({ allTax }) => {
  const taxList = allTax.map((tax) => {
    return <TaxItem key={tax.tax_id} taxData={tax} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {taxList}
    </div>
  );
};

export default TaxList;
