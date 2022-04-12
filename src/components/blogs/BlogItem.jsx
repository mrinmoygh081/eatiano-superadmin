import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Blogs } from '../../context/blogsContext';

const BlogItem = ({ blogData }) => {
  const blogImageSrc = `https://achievexsolutions.in/current_work/eatiano${blogData.blog_main_image}`;
  const blogCtx = useContext(Blogs);

  const deleteBlog = () => {
    blogCtx.deleteBlog(blogData.blog_id);
  };

  return (
    <div>
      <div>
        <img
          src={blogImageSrc}
          alt=''
          className='w-full mb-6 rounded-xl md:mb-8'
        />
      </div>
      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        {blogData.blog_heading}
      </h6>
      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        {blogData.blog_subheading}
      </p>

      <div className='flex items-center justify-between mt-5'>
        <Link
          to={`/blogDetails/${blogData.blog_id}`}
          className='text-brand-text hover:text-border'
        >
          View
        </Link>

        <Link
          to={`/editBlog/${blogData.blog_id}`}
          className='text-border hover:text-brand-text'
        >
          Edit
        </Link>

        <button
          className='text-border hover:text-brand-text'
          onClick={deleteBlog}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
