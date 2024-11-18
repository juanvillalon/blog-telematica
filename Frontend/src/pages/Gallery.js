// src/pages/Gallery.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import fotosus from '../components/images/mrrobot_302.jpg';

const GallerySection = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Gallery = () => {
  return (
    <GallerySection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Galería de Fotos</h2>
      <GalleryGrid>
        <img src={fotosus} alt="Foto sospechosa" style={{ borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        {/* Agrega más fotos aquí */}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery;
