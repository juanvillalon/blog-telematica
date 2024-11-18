// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import imagen1 from './images/portada1.jpg';
import imagen2 from './images/portada2.png';
import imagen3 from './images/portada3.png';

const ImageCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Carousel aria-label="Carrusel de imágenes de Telemática">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen1}
            alt="Imagen de Telemática 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Imagen de Telemática 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Imagen de Telemática 3"
          />
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
};

export default ImageCarousel;
