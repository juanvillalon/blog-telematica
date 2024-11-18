// src/pages/Events.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Events.css';
import LogoutButton from '../components/LogoutButton';

const eventsList = [
  {
    id: 1,
    title: 'Reinicio de Actividades Administrativas y Docentes',
    date: '23 · agosto · 2024',
    startTime: '08:00',
    endTime: '13:00',
    location: 'USM',
    description: 'Inicio de Segundo Semestre 2024 en Casa Central Valparaíso',
    categories: ['Cursos', 'Evento Agenda'],
  },
  {
    id: 2,
    title: 'Conferencia sobre IA y su Impacto en la Educación',
    date: '14 · septiembre · 2024',
    startTime: '10:00',
    endTime: '15:00',
    location: 'Universidad de Chile, Santiago',
    description: 'Expertos internacionales discuten el futuro de la inteligencia artificial en la educación y su implementación en aulas de clase.',
    categories: ['Charlas', 'Seminarios'],
  },
  {
    id: 3,
    title: 'Taller de Robótica Avanzada',
    date: '7 · octubre · 2024',
    startTime: '09:00',
    endTime: '17:00',
    location: 'Centro de Innovación, Valparaíso',
    description: 'Un taller práctico para estudiantes avanzados interesados en la robótica, cubriendo desde sensores hasta la programación de movimientos complejos.',
    categories: ['Cursos', 'Seminarios'],
  },
  {
    id: 4,
    title: 'Taller de Machine Learning',
    date: '31 · agosto · 2024',
    startTime: '09:00',
    endTime: '17:00',
    location: 'DIFTEL, USM',
    description: 'Este taller cubre los conceptos básicos de machine learning, incluyendo técnicas de clasificación, regresión y clustering, utilizando herramientas como Python y TensorFlow.',
    categories: ['Cursos', 'Seminarios'],
  },
  {
    id: 5,
    title: 'Hackathon de Innovación Tecnológica',
    date: '12 · septiembre · 2024',
    startTime: '08:00',
    endTime: '20:00',
    location: 'Campus San Joaquín, Santiago',
    description: 'Un hackathon enfocado en el desarrollo de soluciones innovadoras para problemas reales utilizando tecnologías emergentes como blockchain e IoT.',
    categories: ['Charlas', 'Extra'],
  },
  {
    id: 6,
    title: 'Workshop de Ciberseguridad',
    date: '20 · octubre · 2024',
    startTime: '09:00',
    endTime: '16:00',
    location: 'Laboratorio de Redes, USM',
    description: 'Aprende sobre las últimas técnicas en ciberseguridad, incluyendo la protección contra ataques DDoS, phishing, y cómo asegurar sistemas en la nube.',
    categories: ['Cursos', 'Seminarios'],
  },
  {
    id: 7,
    title: 'Conferencia sobre Blockchain y Criptomonedas',
    date: '5 · noviembre · 2024',
    startTime: '10:00',
    endTime: '14:00',
    location: 'Auditorio Principal, USM',
    description: 'Una conferencia para discutir el impacto de blockchain en la economía global, con ponentes expertos en criptomonedas y finanzas descentralizadas.',
    categories: ['Charlas', 'Seminarios'],
  },
];

const Events = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <motion.div
      className="events-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
          <div>
      <LogoutButton />
      {/* El contenido de la página */}
       {/* Este comentario se verá en el código fuente HTML */}
      <div dangerouslySetInnerHTML={{ __html: '<!-- El del decode no es correcto, pero estos contiene: Decimal B85 B64  H3x 51 98 32 52 56 32 52 97 32 50 55 32 53 52 32 51 100 32 53 100 32 53 99 32 52 99 32 52 51 32 52 48 32 51 57 32 51 53 32 51 57 32 55 53 32 52 49 32 51 50 32 51 55 32 51 50 32 50 50 32 51 56 32 52 102 32 55 53 32 54 48 32 55 53 32 51 101 32 50 52 32 50 49 32 53 50 32 55 52 32 51 56 32 52 102 32 55 53 32 54 100 32 50 57 32 51 100 32 53 100 32 51 55 32 53 57 32 50 53 32 52 48 32 53 50 32 54 57 32 54 100 32 52 51 32 51 101 32 50 51 32 53 50 32 54 50 32 50 99 32 52 48 32 53 55 32 50 51 32 50 56 32 53 98 32 52 48 32 55 50 32 51 53 32 51 55 32 54 100 32 51 100 32 53 100 32 53 98 32 52 57 32 51 55 32 51 101 32 50 51 32 53 50 32 53 102 32 50 54 32 51 97 32 50 101 32 52 57 32 51 48 32 53 55 32 51 57 32 54 57 32 53 48 32 50 51 32 50 54 32 52 48 32 54 98 32 55 50 32 51 54 32 53 101 32 52 49 32 53 49 32 51 50 32 52 53 32 52 100 32 51 57 32 53 48 32 52 56 32 54 55 32 54 100 32 51 101 32 50 52 32 50 98 32 52 57 32 51 102 32 51 100 32 53 100 32 51 55 32 53 56 32 52 49 32 52 48 32 53 54 32 54 101 32 53 48 32 52 56 32 52 48 32 53 50 32 54 57 32 54 101 32 51 54 32 52 49 32 51 52 32 52 99 32 52 56 32 53 56 32 51 100 32 53 100 32 51 55 32 53 57 32 51 51 32 52 49 32 51 54 32 51 50 32 54 51 32 52 52 32 52 48 32 54 98 32 55 49 32 50 53 32 55 51 32 51 101 32 50 52 32 50 99 32 52 56 32 53 52 32 52 48 32 51 57 32 51 55 32 53 99 32 50 100 32 52 48 32 55 50 32 51 52 32 53 99 32 53 99 32 51 49 32 54 54 32 51 54 32 52 52 32 50 49 Good Luck!-->' }} />
    </div>
      <h2>Eventos</h2>
      <div className="events-content">
        <ul className="events-list">
          {eventsList.map((event) => (
            <li key={event.id} className="event-item">
              <div className="event-info" onClick={() => handleToggleExpand(event.id)}>
                <p className="event-date">{event.date}</p>
                <h3 className="event-title">{event.title}</h3>
              </div>
              <div className="event-expand">
                <button className="expand-btn" onClick={() => handleToggleExpand(event.id)}>
                  {expandedEventId === event.id ? '-' : '+'}
                </button>
              </div>
              {expandedEventId === event.id && (
                <motion.div
                  className="event-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p><strong>Inicio:</strong> {event.date} {event.startTime}</p>
                  <p><strong>Término:</strong> {event.date} {event.endTime}</p>
                  <p><strong>Lugar:</strong> {event.location}</p>
                  <p>{event.description}</p>
                  <p><strong>Publicado en:</strong> {event.categories.join(', ')}</p>
                </motion.div>
              )}
            </li>
          ))}
        </ul>

      </div>
      <div className="pagination">
        <button className="pagination-btn">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        {/* Agregar botones de paginación según sea necesario */}
        <button className="pagination-btn"></button>
      </div>
    </motion.div>
  );
};

export default Events;
