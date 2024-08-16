// src/pages/Events.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Events.css';

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
        <div className="calendar-section">
          <div className="calendar">
            <p>Agosto 2024</p>
            <table>
              <thead>
                <tr>
                  <th>Lu</th>
                  <th>Ma</th>
                  <th>Mi</th>
                  <th>Ju</th>
                  <th>Vi</th>
                  <th>Sá</th>
                  <th>Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
                </tr>
                <tr>
                  <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
                </tr>
                <tr>
                  <td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>
                </tr>
                <tr>
                  <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
                </tr>
                <tr>
                  <td>29</td><td>30</td><td>31</td><td></td><td></td><td></td><td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
