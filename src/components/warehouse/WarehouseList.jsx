import React from 'react';
import WarehouseItem from './WarehouseItem';

const WarehouseList = ({ allWarehouse }) => {
  const warehouseList = allWarehouse.map((warehouse) => {
    return <WarehouseItem key={warehouse.warehouse_id} warehouse={warehouse} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {warehouseList}
    </div>
  );
};

export default WarehouseList;
