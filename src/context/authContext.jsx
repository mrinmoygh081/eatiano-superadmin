import { createContext, useState, useEffect, useCallback } from 'react';

let logoutTimer;
export const Auth = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjustedExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('superToken');
  const storedExpirationTime = localStorage.getItem('superExpirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem('superToken');
    localStorage.removeItem('superExpirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const AuthProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [superToken, setSuperToken] = useState(initialToken);
  const isLoggedIn = !!superToken;

  console.log(isLoggedIn);

  const logout = useCallback(() => {
    setSuperToken(null);
    localStorage.removeItem('superToken');
    localStorage.removeItem('superExpirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const login = (token, expirationTime) => {
    setSuperToken(token);
    localStorage.setItem('superToken', token);
    localStorage.setItem('superExpirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logout, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logout, tokenData.duration);
    }
  }, [tokenData, logout]);

  const valueCtx = {
    token: superToken,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };

  return <Auth.Provider value={valueCtx}>{children}</Auth.Provider>;
};

export default AuthProvider;
