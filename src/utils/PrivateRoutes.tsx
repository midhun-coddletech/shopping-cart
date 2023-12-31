import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Authorization from './AuthContext';

const PrivateRoutes: React.FC = function () {
  const token = Authorization();
  const auth = { token: token.isAuthenticated };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
