// src/pages/Curriculum.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LogoutButton from '../components/LogoutButton';

const CurriculumContainer = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Semester = styled.div`
  margin-bottom: 20px;
`;

const Curriculum = () => {
  return (
    <CurriculumContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
          <div>
      <LogoutButton />
      {/* El contenido de la página */}
    </div>
      <h2>Malla Curricular</h2>
      {[
        { semester: '1º Semestre', subjects: ['Matemática I', 'Introducción a la Física', 'Iniciación a la Programación', 'Introducción a la Ingeniería', 'Educación Física I', 'Humanístico I'] },
        { semester: '2º Semestre', subjects: ['Matemática II', 'Física General I', 'Seminario de Programación', 'Educación Física II', 'Expresión Oral y Escrita', 'Humanístico II'] },
        { semester: '3º Semestre', subjects: ['Matemática III', 'Física General II', 'Estructura de Datos y Algoritmos', 'Redes de Computadores', 'Deportes', 'Inglés Nivel I'] },
        { semester: '4º Semestre', subjects: ['Probabilidades y Procesos Aleatorios', 'Electrónica Digital', 'Laboratorio de Electrónica Digital', 'Bases de Datos', 'Química y Sociedad', 'Inglés Nivel II'] },
        { semester: '5º Semestre', subjects: ['Física General III', 'Fundamentos de Transmisión de Señales', 'Diseño y Programación Orientada a Objetos', 'Análisis y Diseño de Software', 'Laboratorio de Redes de Computadores'] },
        { semester: '6º Semestre', subjects: ['Matemática IV', 'Sistemas de Telecomunicaciones', 'Laboratorio de Comunicaciones', 'Ingeniería de Software', 'Disponibilidad y Rendimiento de Sistemas TIC', 'Inglés Nivel III'] },
        { semester: '7º Semestre', subjects: ['Análisis Numérico', 'Sistemas Digitales', 'Laboratorio de Sistemas Digitales', 'Pensamiento de Diseño en Ingeniería', 'Teoría de Sistemas Operativos', 'Inglés Nivel IV'] },
        { semester: '8º Semestre', subjects: ['Física General IV', 'Teoría de Comunicaciones Digitales', 'Criptografía y Seguridad de la Información', 'Administración de Redes de Computadores', 'Procesamiento Digital de Imágenes', 'Inglés Nivel V'] },
        { semester: '9º Semestre', subjects: ['Diseño de Aplicaciones Web y Móviles', 'Minería de Datos', 'Redes de Acceso y Comunicaciones Ópticas', 'Redes Inalámbricas', 'Seguridad en Redes de Computadores', 'Simulación de Redes'] },
        { semester: '10º Semestre', subjects: ['Redes de Sensores', 'Planificación y Dimensionamiento de Redes de Computadores', 'Redes Ópticas WDM', 'Economía I-A', 'Complementario I', 'Inglés Nivel VI'] },
        { semester: '11º Semestre', subjects: ['Complementario II', 'Gestión de Investigación de Operaciones', 'Memoria Multidisciplinaria: Innovación', 'Memoria Multidisciplinaria: Transversal I', 'Taller de Memoria Multidisciplinaria I'] },
        { semester: '12º Semestre', subjects: ['Administración de Empresa', 'Complementario III', 'Memoria Multidisciplinaria: Transversal II', 'Memoria Multidisciplinaria: Emprendimiento', 'Taller de Memoria Multidisciplinaria II'] }
      ].map((sem, index) => (
        <Semester key={index}>
          <h3>{sem.semester}</h3>
          <ul>
            {sem.subjects.map((subject, idx) => (
              <li key={idx}>{subject}</li>
            ))}
          </ul>
        </Semester>
      ))}
    </CurriculumContainer>
  );
};

export default Curriculum;
