// src/pages/Events.js
import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const Events = () => {
  return (
    <motion.div
      className="events-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Eventos</h2>
      <ul>
        <li>Evento 1 - Fecha</li>
        <li>Evento 2 - Fecha</li>
        {/* Agrega más eventos aquí */}
      </ul>
    </motion.div>
  );
};

export default Events;
