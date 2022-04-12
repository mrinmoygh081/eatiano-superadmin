import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Auth } from '../context/authContext';

const Signin = () => {
  const [signinFormData, setSigninFormData] = useState({
    email: '',
    password: '',
  });

  const formData = (e) => {
    setSigninFormData({ ...signinFormData, [e.target.name]: e.target.value });
  };

  const history = useNavigate();

  const authCtx = useContext(Auth);

  const signinSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/super_admin/login',
      {
        email: signinFormData.email,
        password: signinFormData.password,
      }
    );

    setSigninFormData({
      email: '',
      password: '',
    });

    if (response.status === 200) {
      const data = await response.data;
      const expirationTime = new Date(
        new Date().getTime() + +data.expires_in * 1000
      );
      authCtx.login(data.access_token, expirationTime.toISOString());
      console.log(data);
      history('/', { replace: true });
    } else {
      return alert('Error');
    }
  };

  return (
    <>
      <h1 className='mb-12 text-4xl font-bold text-center text-gray-100 lg:text-5xl font-rubik mt-28 md:mt-40 lg:mt-48 lg:mb-20'>
        Super Admin Signin
      </h1>
      <div className='container mb-10 font-rubik md:mb-28'>
        <div className='max-w-lg px-10 py-10 mx-auto shadow-lg bg-secondary rounded-xl'>
          <form onSubmit={signinSubmitHandler}>
            <div className='mb-6 md:mb-9'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Email</label>
              </h6>
              <input
                type='email'
                required
                name='email'
                value={signinFormData.email}
                onChange={formData}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Password</label>
              </h6>
              <input
                type='password'
                required
                name='password'
                value={signinFormData.password}
                onChange={formData}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <button
              type='submit'
              className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
              Signin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
