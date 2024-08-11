// src/pages/UserLogin.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login('user');
    navigate('/comments');
  };

  return (
    <div>
      <h1>User Login</h1>
      <button onClick={handleLogin}>Log in as User</button>
    </div>
  );
};

export default UserLogin;
