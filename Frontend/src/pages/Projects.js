// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Proyectos</h2>
      <div className="projects-list">
        <div className="project">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1...</p>
        </div>
        <div className="project">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2...</p>
        </div>
        {/* Agrega más proyectos aquí */}
      </div>
    </motion.div>
  );
};

export default Projects;
