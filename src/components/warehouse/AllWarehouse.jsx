import React, { useContext, useState, useRef } from 'react';
import { Warehouse } from '../../context/warehouseContext';
import WarehouseList from './WarehouseList';

const AllWarehouse = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const warehouse = useContext(Warehouse);
  const allWarehouse = warehouse.warehouse;

  const searchRef = useRef();

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredWarehouse = allWarehouse.filter((warehouse) => {
        return Object.values(warehouse)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredWarehouse);
    } else {
      setSearchResults(allWarehouse);
    }
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <h2 className='mb-10 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-16'>
        All Warehouse
      </h2>

      <div className='grid gap-2 md:gap-6 md:grid-cols-4 lg:grid-cols-7 md:place-content-center md:place-items-center'>
        <div className='w-full md:col-span-2 lg:col-span-5'>
          <form onSubmit={searchFormHandler}>
            <input
              type='text'
              placeholder='Search Warehouse by Latitude or Longitude'
              className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              ref={searchRef}
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>
        </div>
      </div>

      <WarehouseList
        allWarehouse={searchTerm.length < 1 ? allWarehouse : searchResults}
      />
    </div>
  );
};

export default AllWarehouse;
