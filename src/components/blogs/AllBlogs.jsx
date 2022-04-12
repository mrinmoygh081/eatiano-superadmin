import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Blogs } from '../../context/blogsContext';
import BlogList from './BlogList';

const AllBlogs = () => {
  const blogsCtx = useContext(Blogs);
  const blogs = blogsCtx.blogs;

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRef = useRef();

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredBlogs = blogs.filter((blog) => {
        return Object.values(blog)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredBlogs);
    } else {
      setSearchResults(blogs);
    }
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <h2 className='mb-10 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-16'>
        All Blogs
      </h2>

      <div className='grid gap-2 md:gap-6 md:grid-cols-4 lg:grid-cols-7 md:place-content-center md:place-items-center'>
        <div className='w-full md:col-span-2 lg:col-span-5'>
          <form onSubmit={searchFormHandler}>
            <input
              type='text'
              placeholder='Search Blogs By Heading Or Subheading...'
              className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              ref={searchRef}
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>
        </div>

        <div className='md:col-span-2 lg:col-span-2'>
          <Link to='/blogs/add'>
            <button className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:w-auto hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Add New Blog
            </button>
          </Link>
        </div>
      </div>

      <BlogList blogs={searchTerm.length < 1 ? blogs : searchResults} />
    </div>
  );
};

export default AllBlogs;
