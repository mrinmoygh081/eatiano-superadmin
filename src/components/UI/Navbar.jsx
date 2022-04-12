import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from '../../context/authContext';

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const showMobNav = () => {
    setNavToggle((value) => !value);
  };

  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className='fixed top-0 left-0 z-50 w-full shadow-lg opacity-100 bg-secondary'>
      <nav className='shadow-lg bg-secondary font-rubik'>
        <div className='container flex flex-wrap items-center justify-between py-3 md:py-4'>
          <NavLink
            to='/'
            exact='true'
            className='text-3xl font-semibold text-gray-100 md:text-4xl'
          >
            Logo
          </NavLink>

          <div className='lg:hidden'>
            <i
              className='text-gray-200 transition-all duration-200 fa fa-bars fa-2x hover:text-brand-text'
              onClick={showMobNav}
            ></i>
          </div>

          <div className='hidden lg:block'>
            <ul className='hidden list-none lg:flex'>
              {isLoggedIn && (
                <li className='py-2 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/profile'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    My Profile
                  </NavLink>
                </li>
              )}

              {isLoggedIn && (
                <li
                  className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'
                  onClick={logoutHandler}
                >
                  <NavLink
                    to='/signin'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div
          className={
            'container transition-all duration-300 ' +
            (navToggle
              ? ' translate-y-0 py-4 opacity-100 h-full'
              : ' -translate-y-96 opacity-0 h-0')
          }
        >
          <ul className='grid grid-cols-3 gap-6 list-none place-items-center'>
            <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
              <NavLink to='/'>Dashboard</NavLink>
            </li>
            <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
              <NavLink to='/profile'>My Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
