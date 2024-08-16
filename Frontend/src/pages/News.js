// src/pages/News.js
import React from 'react';
import { motion } from 'framer-motion';
import './News.css';
import noticia1 from '../components/images/noticia1.jpeg';
import noticia2 from '../components/images/noticia2.jpeg';
import noticia3 from '../components/images/noticia3.png';
import noticia4 from '../components/images/noticia4.png';
import noticia5 from '../components/images/noticia5.jpg';

const newsArticles = [
  {
    id: 1,
    title: 'Jornadas de autoevaluación de la carrera',
    date: '27 · mayo · 2024',
    image: noticia1, // Asigna la imagen directamente
    content: 'El pasado miércoles 22 de mayo, se realizaron jornadas de autoevaluación de la carrera en el Campus Casa Central Valparaíso y en el Campus Santiago San Joaquín.',
  },
  {
    id: 2,
    title: 'Jornadas de difusión del proceso de certificación de Ingeniería Civil Telemática',
    date: '27 · mayo · 2024',
    image: noticia2,
    content: 'Contenido de la noticia 2...',
  },
  {
    id: 3,
    title: 'Conectando a las Niñas con las TIC durante Un Día en Telemática USM',
    date: '23 · abril · 2024',
    image: noticia3,
    content: 'Contenido de la noticia 3...',
  },
  {
    id: 4,
    title: 'Jornada con exalumnos 2024-Celebración 20 años de Ingeniería Civil Telemática',
    date: '17 · abril · 2024',
    image: noticia4,
    content: 'Contenido de la noticia 4...',
  },
  {
    id: 5,
    title: 'Call for Faculty Position at Department of Electronic Engineering, Santiago de Chile',
    date: '25 · septiembre · 2022',
    image: noticia5,
    content: 'Contenido de la noticia 5...',
  },
];

const News = () => {
  return (
    <motion.div
      className="news-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Noticias</h2>
      <div className="news-grid">
        {newsArticles.map((article) => (
          <div key={article.id} className="news-article">
            <img src={article.image} alt={article.title} />
            <div className="news-content">
              <p className="news-date">{article.date}</p>
              <h3>{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="pagination-btn">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">4</button>
        <button className="pagination-btn">5</button>
      </div>
    </motion.div>
  );
};

export default News;
