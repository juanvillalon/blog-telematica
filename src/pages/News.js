// src/pages/News.js
import React from 'react';
import { motion } from 'framer-motion';
import './News.css';

const News = () => {
  return (
    <motion.div
      className="news-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Noticias</h2>
      <article>
        <h3>Noticias 1</h3>
        <p>Contenido de la noticia 1...</p>
      </article>
      <article>
        <h3>Noticias 2</h3>
        <p>Contenido de la noticia 2...</p>
      </article>
      {/* Agrega más artículos de noticias aquí */}
    </motion.div>
  );
};

export default News;
