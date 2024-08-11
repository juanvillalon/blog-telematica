// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
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
        landingPageContent,
        comments,
        logs,
        addComment,
        editLandingPageContent,
        uploadImageLog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
