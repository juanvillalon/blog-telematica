// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    { name: "Carlos Pérez", email: "carlos.perez@example.com", rating: 5, comment: "Excelente taller, muy útil y bien organizado." },
    { name: "Ana Gómez", email: "ana.gomez@example.com", rating: 4, comment: "Buen contenido, pero faltó tiempo para preguntas." },
    { name: "Mario Ruiz", email: "mario.ruiz@example.com", rating: 3, comment: "El taller fue bueno, aunque la presentación fue un poco apresurada." },
    { name: "Luisa Fernández", email: "luisa.fernandez@example.com", rating: 5, comment: "Me encantó el enfoque práctico del taller, aprendí mucho." },
    { name: "Diego Ramírez", email: "diego.ramirez@example.com", rating: 4, comment: "Muy buen taller, pero el espacio era reducido." },
    { name: "Jorge Silva", email: "jorge.silva@example.com", rating: 2, comment: "El contenido era interesante, pero la organización dejó que desear." },
    { name: "Claudia Soto", email: "claudia.soto@example.com", rating: 5, comment: "Excelente presentación y material, muy recomendable." },
    { name: "Andrés Núñez", email: "andres.nunez@example.com", rating: 3, comment: "El taller fue bueno, pero esperaba más profundidad en los temas." },
    { name: "Patricia Reyes", email: "patricia.reyes@example.com", rating: 4, comment: "Buena calidad del contenido, pero la duración fue corta." },
    { name: "Juan Rojas", email: "juan.rojas@example.com", rating: 5, comment: "Increíble experiencia, superó mis expectativas." },
  ]);

  const [landingPageContent, setLandingPageContent] = useState(
    'La telemática es una disciplina que integra las tecnologías de las telecomunicaciones y la informática...'
  );

  const [comments, setComments] = useState([
    'Me encanta esta página.',
    'Muy informativo, gracias.',
    'Aprendí mucho sobre telemática.'
  ]);

  const [logs, setLogs] = useState([
    'Usuario admin inició sesión.',
    'Visitas incrementadas a 100.',
    'Imagen telematica1.jpg subida.'
  ]);

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
    setLogs([...logs, `Nuevo comentario añadido: ${comment}`]);
  };

  const editLandingPageContent = (newContent) => {
    setLandingPageContent(newContent);
    setLogs([...logs, 'Contenido de la landing page editado.']);
  };

  const uploadImageLog = (imageName) => {
    setLogs([...logs, `Imagen ${imageName} subida.`]);
  };

  return (
    <AppContext.Provider
      value={{
        reviews,
        landingPageContent,
        comments,
        logs,
        addReview,
        addComment,
        editLandingPageContent,
        uploadImageLog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
