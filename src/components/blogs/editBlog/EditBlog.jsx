import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Auth } from '../../../context/authContext';

const EditBlog = () => {
  const [editBlog, setEditBlog] = useState({
    heading: '',
    subheading: '',
    details: '',
    metaData: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const [blogImg, setBlogImg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const blogData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/edit_blog/${id}`,
        config
      );

      const resData = response.data.data;
      setEditBlog({
        heading: resData.blog_heading,
        subheading: resData.blog_subheading,
        details: resData.blog_details,
        metaData: resData.blog_meta_data,
      });
    };

    blogData();
  }, []);

  const editBlogHandler = (e) => {
    setEditBlog({ ...editBlog, [e.target.name]: e.target.value });
  };

  const editBlogSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('blog_main_image', blogImg);
    formData.append('blog_heading', editBlog.heading);
    formData.append('blog_subheading', editBlog.subheading);
    formData.append('blog_details', editBlog.details);
    formData.append('blog_meta_data', editBlog.metaData);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/edit_blog/${id}`,
      formData,
      config
    );

    setEditBlog({
      heading: '',
      subheading: '',
      details: '',
      metaData: '',
    });
    setBlogImg(null);

    const resData = response.data;
    console.log(resData);
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Blog
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editBlogSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Blog Heading*</label>
              </h6>
              <input
                type='text'
                required
                name='heading'
                value={editBlog.heading}
                onChange={editBlogHandler}
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
                value={editBlog.subheading}
                onChange={editBlogHandler}
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
                value={editBlog.metaData}
                onChange={editBlogHandler}
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
                  setBlogImg(e.target.files[0]);
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
                onChange={editBlogHandler}
                value={editBlog.details}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
