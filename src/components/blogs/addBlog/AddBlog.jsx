import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../../context/authContext';
// import { Blogs } from '../../../context/blogsContext';

const AddBlog = () => {
  const [newBlog, setNewBlog] = useState({
    heading: '',
    subheading: '',
    details: '',
    metaData: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const [blogImage, setBlogImage] = useState(null);

  const newBlogHandler = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const addNewBlog = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append('blog_main_image', blogImage);
    formData.append('blog_heading', newBlog.heading);
    formData.append('blog_subheading', newBlog.subheading);
    formData.append('blog_details', newBlog.details);
    formData.append('blog_meta_data', newBlog.metaData);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/add_blog',
      formData,
      config
    );

    setNewBlog({
      heading: '',
      subheading: '',
      details: '',
      metaData: '',
    });
    setBlogImage(null);
    const resData = await response.data;
    console.log(resData);
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Add New Blog
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={addNewBlog}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Heading*</label>
              </h6>
              <input
                type='text'
                required
                name='heading'
                value={newBlog.heading}
                onChange={newBlogHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Subheading*</label>
              </h6>
              <input
                type='text'
                name='subheading'
                value={newBlog.subheading}
                onChange={newBlogHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Meta Data*</label>
              </h6>
              <input
                type='text'
                required
                name='metaData'
                value={newBlog.metaData}
                onChange={newBlogHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Image*</label>
              </h6>
              <input
                type='file'
                required
                accept='image/*'
                name='blog_main_image'
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setBlogImage(e.target.files[0]);
                }}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Details*</label>
              </h6>
              <textarea
                cols='30'
                rows='3'
                name='details'
                onChange={newBlogHandler}
                value={newBlog.details}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
