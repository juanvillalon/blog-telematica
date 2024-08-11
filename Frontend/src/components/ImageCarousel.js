// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

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
            src="https://telematica.usm.cl/admision/attachment/casa-central-ingenieria-civil-telematica-w2000-1-3/"
            alt="Imagen de Telemática 1"
          />
          <Carousel.Caption>
            <h3>Telemática 1</h3>
            <p>Descripción de la imagen 1.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
            alt="Imagen de Telemática 2"
          />
          <Carousel.Caption>
            <h3>Telemática 2</h3>
            <p>Descripción de la imagen 2.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://telematica.usm.cl/admision/attachment/casa-central-ingenieria-civil-telematica-w2000-1-3/"
            alt="Imagen de Telemática 3"
          />
          <Carousel.Caption>
            <h3>Telemática 3</h3>
            <p>Descripción de la imagen 3.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
};

export default ImageCarousel;
