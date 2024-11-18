import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import axios from 'axios';

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
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      console.log("Response from server:", response.data);
      login('user');  // Guarda el estado de autenticación como 'user'
      navigate('/comments');  // Redirige a la página de aterrizaje
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        setError(`Error ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <div>
      <LogoutButton />
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
