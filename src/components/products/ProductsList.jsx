import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({ allProducts }) => {
  const productsList = allProducts.map((product) => {
    return <ProductItem key={product.product_id} productData={product} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {productsList}
    </div>
  );
};

export default ProductsList;
