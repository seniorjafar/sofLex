import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth.isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
