// src/pages/Dashboard.js
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f0f8ff;
  min-height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CommentList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const LogList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9em;
  line-height: 1.5;
`;

const ImageUploader = styled.input`
  display: block;
  margin-top: 10px;
`;

const Dashboard = () => {
  const { landingPageContent, comments, logs, editLandingPageContent, uploadImageLog } = useContext(AppContext);
  const [visits, setVisits] = useState(0);
  const [activeUsers, setActiveUsers] = useState(42); // Simulado

  useEffect(() => {
    // Simulamos obtener el contador de visitas
    const storedVisits = localStorage.getItem('visits');
    setVisits(storedVisits ? parseInt(storedVisits) : 0);
  }, []);

  const handleEditLandingPage = () => {
    const newContent = prompt('Edita el contenido de la landing page:', landingPageContent);
    if (newContent) {
      editLandingPageContent(newContent);
    }
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageLog(file.name);
      alert(`Imagen ${file.name} subida exitosamente.`);
    }
  };

  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Navegación del Sitio</SectionTitle>
        <NavigationList>
          <li><NavLink to="/">Landing Page</NavLink></li>
          <li><NavLink to="/curriculum">Malla Curricular</NavLink></li>
          <li><NavLink to="/comments">Comentarios</NavLink></li>
          <li><NavLink to="/gallery">Galería de Fotos</NavLink></li>
          <li><NavLink to="/news">Noticias</NavLink></li>
          <li><NavLink to="/events">Eventos</NavLink></li>
          <li><NavLink to="/projects">Proyectos</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </NavigationList>
      </Section>

      <Section>
        <SectionTitle>Métricas del Sitio</SectionTitle>
        <p>Total de visitas: {visits}</p>
        <p>Número total de comentarios: {comments.length}</p>
        <p>Usuarios activos (simulado): {activeUsers}</p>
      </Section>

      <Section>
        <SectionTitle>Gestión de Comentarios</SectionTitle>
        <CommentList>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </CommentList>
        <EditButton onClick={() => alert('Funcionalidad para eliminar o moderar comentarios.')}>
          Modera Comentarios
        </EditButton>
      </Section>

      <Section>
        <SectionTitle>Editar Landing Page</SectionTitle>
        <p>{landingPageContent}</p>
        <EditButton onClick={handleEditLandingPage}>Editar Contenido</EditButton>
      </Section>

      <Section>
        <SectionTitle>Subir Imágenes al Carrusel</SectionTitle>
        <ImageUploader type="file" onChange={handleUploadImage} />
      </Section>

      <Section>
        <SectionTitle>Registro de Actividades</SectionTitle>
        <LogList>
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </LogList>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
