// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { authState } = useAuth();

  if (!authState.isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requiredRole && authState.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return element;
};

const ProtectedRouteTeam = ({ element, requiredRole }) => {
  const { authState } = useAuth();

  if (!authState.isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requiredRole && authState.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return element;
};

export default {
  ProtectedRoute,
  ProtectedRouteTeam
};