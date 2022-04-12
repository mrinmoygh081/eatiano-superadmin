import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => {
  const blogsList = blogs.map((blog) => {
    return <BlogItem key={blog.blog_id} blogData={blog} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {blogsList}
    </div>
  );
};

export default BlogList;
