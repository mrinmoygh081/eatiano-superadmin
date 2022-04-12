import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Details from './Details';
import { Auth } from '../../../context/authContext';

const BlogDetails = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const { id } = useParams();
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  useEffect(() => {
    const getAllBlogs = async () => {
      const config = {
        headers: {
          // Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/all_blogs',
        config
      );
      const allBlogsData = result.data.data;
      console.log(allBlogsData);
      setAllBlogs(allBlogsData);
    };
    getAllBlogs();
  }, []);

  const newBlog = allBlogs.filter((blog) => blog.blog_id === +id);
  console.log(newBlog);

  const newBlogDetails = newBlog.map((blogDetails) => {
    return <Details key={blogDetails.blog_id} details={blogDetails} />;
  });

  return (
    <div className='container mt-32 lg:mt-48 font-rubik'>
      <h1>{newBlogDetails}</h1>
    </div>
  );
};

export default BlogDetails;
