import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Blogs = createContext({
  blogs: [],
  deleteBlog: (id) => {},
});

const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteBlog = (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/delete_blog/${id}`,
      config
    );

    const filteredBlogs = blogs.filter((blog) => blog.blog_id !== id);
    setBlogs(filteredBlogs);
  };

  useEffect(() => {
    const getBlogs = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/all_blogs',
        config
      );

      const resData = response.data.data;
      console.log(resData);
      setBlogs(resData);
    };
    getBlogs();
  }, []);

  const blogsValue = {
    blogs: blogs,
    deleteBlog: deleteBlog,
  };

  return <Blogs.Provider value={blogsValue}>{children}</Blogs.Provider>;
};

export default BlogsProvider;
