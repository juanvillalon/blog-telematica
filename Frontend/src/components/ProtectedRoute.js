// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ requiredRole, children }) => {
  const { authState } = useAuth();

  if (!authState.isAuthenticated) {
    return requiredRole === 'admin' ? <Navigate to="/admin-login" /> : <Navigate to="/user-login" />;
  }

  if (requiredRole && authState.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute; // Exporta como exportación por defecto
