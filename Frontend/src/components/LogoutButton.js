// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // O redirige a una página específica después del logout
  };

  return (
    <button onClick={handleLogout} style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
      Home
    </button>
  );
};

export default LogoutButton;
