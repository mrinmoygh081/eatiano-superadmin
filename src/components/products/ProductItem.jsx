import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ productData }) => {
  const productImageSrc = `https://achievexsolutions.in/current_work/eatiano${productData.product_image}`;

  return (
    <div>
      <div>
        <img
          src={productImageSrc}
          alt=''
          className='w-full mb-6 rounded-xl md:mb-8'
        />
      </div>
      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        {productData.product_name}
      </h6>
      <h6 className='mb-4 font-medium text-center text-gray-200'>
        From :{' '}
        <span className='text-brand-text'>{productData.restaurant_name}</span>
      </h6>
      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        {productData.product_description}
      </p>

      <div className='flex items-center justify-between mb-4'>
        <p className='text-cta-dark'>{productData.category_name[0]}</p>
        <p className='text-cta-dark'>{productData.category_name[1]}</p>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <p className='text-gray-300'>
          Quantity: {productData.product_quantity}
        </p>
        <p className='text-gray-300'>
          Price: {productData.product_selling_price} /-
        </p>
      </div>

      <Link
        to={`/editProduct/${productData.product_id}`}
        className='text-border hover:text-brand-text'
      >
        Edit Details
      </Link>
    </div>
  );
};

export default ProductItem;
