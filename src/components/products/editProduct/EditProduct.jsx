import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Auth } from '../../../context/authContext';

const EditProduct = () => {
  const [editProduct, setEditProduct] = useState({
    name: '',
    description: '',
    sellingPrice: '',
    metaData: '',
    quantity: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const [productImg, setProductImg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/edit_product/${id}`,
        config
      );

      const resData = response.data.data;
      setEditProduct({
        name: resData[0].product_name,
        quantity: resData[0].product_quantity,
        description: resData[0].product_description,
        metaData: resData[0].product_meta_data,
        sellingPrice: resData[0].product_selling_price,
      });
    };

    productData();
  }, []);

  const editProductHandler = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const editProductSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('product_image', productImg);
    formData.append('product_name', editProduct.name);
    formData.append('product_description', editProduct.description);
    formData.append('product_meta_data', editProduct.metaData);
    formData.append('product_quantity', editProduct.quantity);
    formData.append('product_selling_price', editProduct.sellingPrice);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/edit_product/${id}`,
      formData,
      config
    );

    setEditProduct({
      name: '',
      description: '',
      sellingPrice: '',
      metaData: '',
      quantity: '',
    });
    setProductImg(null);

    const resData = response.data;
    console.log(resData);
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Product
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editProductSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Product Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={editProduct.name}
                onChange={editProductHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Product Quantity*</label>
              </h6>
              <input
                type='number'
                name='quantity'
                value={editProduct.quantity}
                onChange={editProductHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Selling Price*</label>
              </h6>
              <input
                type='number'
                name='sellingPrice'
                value={editProduct.sellingPrice}
                onChange={editProductHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Product Meta Data*</label>
              </h6>
              <input
                type='text'
                required
                name='metaData'
                value={editProduct.metaData}
                onChange={editProductHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Product Image*</label>
              </h6>
              <input
                type='file'
                required
                accept='image/*'
                name='product_image'
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setProductImg(e.target.files[0]);
                }}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Product Description*</label>
              </h6>
              <textarea
                cols='30'
                rows='3'
                name='description'
                onChange={editProductHandler}
                value={editProduct.description}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
