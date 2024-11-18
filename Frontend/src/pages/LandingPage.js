import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Header from '../components/Header';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import logo1 from '../components/images/logo1.png';
import logo2 from '../components/images/logo2.png';

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
  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const UsmLogo = styled.img`
  height: 60px;
`;

const TelematicaLogo = styled.img`
  height: 60px;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const StyledButton = styled(motion.button)`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 15px 60px;
  font-size: 1em;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #004080;
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const HiddenButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
  cursor: pointer;
`;

const LandingPage = () => {
  const { authState } = useAuth();
  const { landingPageContent } = useContext(AppContext);
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDoubleClick = () => {
    navigate('/admin-login');
  };

  return (
    <LandingPageContainer>
      <LogoContainer>
        <UsmLogo src={logo1} alt="Logo USM" />
        <TelematicaLogo src={logo2} alt="Logo Telemática" />
      </LogoContainer>
      <HiddenButton onDoubleClick={handleDoubleClick}>Admin Login</HiddenButton>
      <MainContent>
        <QuestionSection
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>¿Qué es Telemática?</h2>
          <p>{landingPageContent}</p>
        </QuestionSection>
        <CarouselSection>
          <ImageCarousel />
        </CarouselSection>
        <ButtonContainer>
            <>
              <StyledButton whileHover={{ scale: 1.1 }} onClick={() => navigate('/comments')}>
                Comentarios
              </StyledButton>
              <StyledButton whileHover={{ scale: 1.1 }} onClick={() => navigate('/contact')}>
                Contacto
              </StyledButton>
              <StyledButton whileHover={{ scale: 1.1 }} onClick={() => navigate('/curriculum')}>
                Malla Curricular
              </StyledButton>
              <StyledButton whileHover={{ scale: 1.1 }} onClick={() => navigate('/events')}>
                Eventos
              </StyledButton>
              <StyledButton whileHover={{ scale: 1.1 }} onClick={() => navigate('/news')}>
                Noticias
              </StyledButton>
              <StyledButton whileHover={{ scale: 1.1 }} onClick={() => navigate('/teams')}>
                Team
              </StyledButton>
            </>
        </ButtonContainer>
        <Clock>
          Hora Actual: {time.toLocaleTimeString()}
        </Clock>
        A veces los secretos se encuentra a simple vista "74 33 6c 5f 55 54 46 53 4d 7b 30 6e 6c 79 5f 79 30 75 2e 66 31 72 73 74 46 6c 34 67 30 66 43 68 34 6c 6c 33 6e 67 33 7d" codificando caracteres de manera precisa.
      </MainContent>
    </LandingPageContainer>
  );
};

export default LandingPage;
