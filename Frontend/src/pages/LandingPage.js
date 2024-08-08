// src/pages/LandingPage.js
import React, { useState, useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Header from '../components/Header';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LandingPageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(270deg, #00c6ff, #0072ff, #0052ff, #0033ff);
  background-size: 600% 600%;
  animation: ${gradient} 15s ease infinite;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const QuestionSection = styled(motion.div)`
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  max-width: 800px;
  text-align: justify;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const CarouselSection = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Clock = styled.div`
  font-size: 1.2em;
  color: #ffffff;
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const VisitCounter = styled.div`
  font-size: 1.2em;
  color: #ffffff;
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const LandingPage = () => {
  const [visits, setVisits] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setVisits((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <LandingPageContainer>
      <Header title="TeleBlog" />
      <MainContent>
        <QuestionSection
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>¿Qué es telemática?</h2>
          <p style={{ fontSize: '12px', margin: '10px 0' }}>
            La telemática es una disciplina que combina las tecnologías de las telecomunicaciones y la informática. Se centra en el estudio y desarrollo de sistemas para la transmisión, recepción y procesamiento de información a través de medios electrónicos. 
            Los ingenieros telemáticos trabajan en áreas como el diseño de redes de comunicación, la implementación de sistemas de transmisión de datos, y la creación de aplicaciones que integran hardware y software para mejorar la conectividad y el intercambio de información.
            En resumen, la telemática es esencial para la infraestructura tecnológica moderna, permitiendo la interconexión de dispositivos y sistemas en todo el mundo.
          </p>
        </QuestionSection>
        <CarouselSection>
          <ImageCarousel />
        </CarouselSection>
        <Clock>
          Hora Actual: {time.toLocaleTimeString()}
        </Clock>
        <VisitCounter>
          Contador de Visitas: {visits}
        </VisitCounter>
      </MainContent>
    </LandingPageContainer>
  );
};

export default LandingPage;
