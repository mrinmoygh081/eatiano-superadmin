import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Auth } from '../../context/authContext';
import ProductsList from './ProductsList';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  const authCtx = useContext(Auth);
  const token = authCtx.token;
  const searchRef = useRef();

  useEffect(() => {
    const getProducts = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/restaurant_product/${id}`,
        config
      );

      const resData = response.data.data;
      setProducts(resData);
    };

    getProducts();
  }, []);

  console.log(products);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredProducts = products.filter((product) => {
        return Object.values(product)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredProducts);
    } else {
      setSearchResults(products);
    }
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <h2 className='mb-10 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-16'>
        All Products
      </h2>

      <div className='grid gap-2 md:gap-6 md:grid-cols-4 lg:grid-cols-7 md:place-content-center md:place-items-center'>
        <div className='w-full md:col-span-2 lg:col-span-5'>
          <form onSubmit={searchFormHandler}>
            <input
              type='text'
              placeholder='Search Products By Name Or Category Or Cuisinie...'
              className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              ref={searchRef}
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>
        </div>

        <div className='md:col-span-2 lg:col-span-2'>
          <Link to={`/restaurantProducts/add/${id}`}>
            <button className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:w-auto hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Add New Product
            </button>
          </Link>
        </div>
      </div>

      <ProductsList
        allProducts={searchTerm.length < 1 ? products : searchResults}
      />
    </div>
  );
};

export default AllProducts;
