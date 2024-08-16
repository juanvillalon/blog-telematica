import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch('http://172.22.192.1:3001/api/login', {
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
      login('user');  // Guarda el estado de autenticación como 'user'
      navigate('/');  // Redirige a la página de aterrizaje
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in as User</button>
      </form>
    </div>
  );
};

export default UserLogin;
