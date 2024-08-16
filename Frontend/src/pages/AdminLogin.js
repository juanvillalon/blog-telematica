import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../components/LogoutButton';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AdminLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch('http://172.22.192.1:3001/api/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
      login('admin');  // Guarda el estado de autenticación como 'admin'
      navigate('/dashboard');  // Redirige al panel de administración
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <LoginContainer>
          <div>
      <LogoutButton />
      {/* El contenido de la página */}
    </div>
      <LoginForm onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">Iniciar Sesión</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default AdminLogin;
