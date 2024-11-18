import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TeamCard from '../components/TeamCard';
import team1 from '../components/images/team1.jpg';
import team2 from '../components/images/team2.jpg';
import team3 from '../components/images/team3.jpg';
import team4 from '../components/images/team4.png';
import LogoutButton from '../components/LogoutButton';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState('');
  const [vulnerability, setVulnerability] = useState('');
  const [hint, setHint] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [teamNameError, setTeamNameError] = useState('');
  const [imageError, setImageError] = useState('');

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/team');
      setTeams(response.data);
      setError(null);
      setShowForm(response.data.length === 0);
    } catch (error) {
      console.error('Error fetching teams:', error);
      setError('Error fetching teams');
    } finally {
      setLoading(false);
    }
  };

  const submitFlag = async () => {
    try {
      const response = await axios.post('/api/team/flag', { flag });
      const data = response.data;
      console.log("sandia", data);
      if (data.mensaje.includes("Flag coincide")) {
        setHint(data.mensaje);
        fetchTeams();
      } else {
        setHint('Flag incorrecta. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting flag:', error);
      setHint('Error al enviar la flag');
    }
  };

  const submitVulnerability = async () => {
    try {
      const response = await axios.post('/api/team/vuln', { vulnerability });
      const data = response.data;
      console.log("Vulnerabilidad", data);
      if (data.mensaje.includes("¡Vulnerabilidad coincide y fue desencriptada!")) {
        setHint(data.mensaje);
        fetchTeams();
      } else {
        setHint('Vulnerabilidad incorrecta. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting vulnerability:', error);
      setHint('Error al enviar la vulnerabilidad');
    }
  };

  const createTeam = async () => {
    if (teamName.trim() === '') {
      setTeamNameError('El nombre del equipo es obligatorio.');
      return;
    }

    if (imageSrc.trim() === '') {
      setImageError('Debes seleccionar una imagen.');
      return;
    }

    setTeamNameError('');
    setImageError('');
    try {
      const response = await axios.put('/api/team', { teamName, imageSrc });
      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }
      await fetchTeams();
    } catch (error) {
      console.error('Error creating team:', error);
      setError('Error creating team');
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Container className="p-4 bg-primary dark:bg-background">
          <div>
      <LogoutButton />
      {/* El contenido de la página */}
    </div>
      <Button onClick={fetchTeams} variant="primary" className="mb-4">
        Actualizar Equipos
      </Button>

      {loading && <p>Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}

      {showForm ? (
        <Form className="mb-4">
          <Form.Group controlId="formTeamName">
            <Form.Label>Nombre del Equipo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce el nombre del equipo"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              isInvalid={!!teamNameError} // Indicar error en el campo
            />
            <Form.Control.Feedback type="invalid">
              {teamNameError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formImageSelect">
            <Form.Label>Selecciona una imagen</Form.Label>
            <div className="d-flex justify-content-around">
              <Col xs={3}>
                <img
                  src={team1}
                  alt="Image 1"
                  onClick={() => setImageSrc('team1')}
                  style={{
                    cursor: 'pointer',
                    border: imageSrc === 'team1' ? '2px solid blue' : 'none',
                    width: '300px',   // Fija el ancho de la imagen
                    height: '300px',  // Fija la altura de la imagen
                    objectFit: 'cover' // Asegura que la imagen se ajuste al contenedor sin distorsión
                  }}
                />
              </Col>
              <Col xs={3}>
                <img
                  src={team2}
                  alt="Image 2"
                  onClick={() => setImageSrc('team2')}
                  style={{
                    cursor: 'pointer',
                    border: imageSrc === 'team2' ? '2px solid blue' : 'none',
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
              </Col>
              <Col xs={3}>
                <img
                  src={team3}
                  alt="Image 3"
                  onClick={() => setImageSrc('team3')}
                  style={{
                    cursor: 'pointer',
                    border: imageSrc === 'team3' ? '2px solid blue' : 'none',
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
              </Col>
              <Col xs={3}>
                <img
                  src={team4}
                  alt="Image 4"
                  onClick={() => setImageSrc('team4')}
                  style={{
                    cursor: 'pointer',
                    border: imageSrc === 'team4' ? '2px solid blue' : 'none',
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
              </Col>
            </div>
            {imageError && <p className="text-danger">{imageError}</p>} {/* Mensaje de error para la imagen */}
          </Form.Group>

          <Button variant="success" onClick={createTeam}>
            Crear Equipo
          </Button>
        </Form>
      ) : (
        <Row>
          {teams.map((team) => (
            <TeamCard
              key={team.id}  // Asegúrate de usar una clave única para cada elemento
              teamName={team.teamName}
              imageSrc={team.imageSrc}
              vulnerabilities={team.vulnerabilities}
              flags={team.flags}
            />
          ))}
                {/* Formulario para enviar la flag */}
                <Row>
        <Col>
              {/* Formulario para enviar vulnerabilidad */}
      <Form className="mb-4">
        <Form.Group controlId="formVulnerability">
          <Form.Label>Ingresa tu Vulnerabilidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce la vulnerabilidad aquí"
            value={vulnerability}
            onChange={(e) => setVulnerability(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" size="lg" onClick={submitVulnerability} style={{justifyContent: 'center', alignItems: 'center' }}>
          Enviar Vulnerabilidad
        </Button>
      </Form>
      </Col>
      <Col>
      <Form className="mb-4">
        <Form.Group controlId="formFlag">
          <Form.Label>Ingresa tu Flag</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Introduce la flag aquí"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" onClick={submitFlag} size="lg" style={{justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
          Enviar Flag
        </Button>
      </Form>
      </Col>  
      </Row>
      {hint && <p className="text-info">{hint}</p>}
        </Row>
      )}
    </Container>

  );
};

export default Teams;


