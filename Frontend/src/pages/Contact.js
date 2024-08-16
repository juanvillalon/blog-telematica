// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import LogoutButton from '../components/LogoutButton';


const Contact = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://172.22.192.1:3001/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setResponseMessage('Usuario creado exitosamente.');
        setForm({ username: '', email: '', password: '' });
      } else {
        setResponseMessage('Error al crear el usuario.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error en la solicitud.');
    }
  };

  return (
    <motion.div
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >    <div>
    <LogoutButton />
    {/* El contenido de la página */}
  </div>
      <h2>Contacto</h2>
      <h4>¿Tienes alguna duda? Deja tus datos para que te contactemos</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Escriba su duda:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </motion.div>
  );
};

export default Contact;
