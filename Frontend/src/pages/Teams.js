import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TeamCard from '../components/TeamCard';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState('');
  const [hint, setHint] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [showForm, setShowForm] = useState(false);

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://172.22.192.1:3001/api/team');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
      }
  
      const data = await response.json();
      setTeams(data);
      setError(null);
      setShowForm(data.length === 0); // Show form if no teams are found
    } catch (error) {
      console.error('Error fetching teams:', error);
      setError('Error fetching teams');
    } finally {
      setLoading(false);
    }
  };

  const submitFlag = async () => {
    try {
      const response = await fetch('http://172.22.192.1:3001/api/team/flag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flag }), // Solo enviar la flag
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data)
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
  
  

  const createTeam = async () => {
    try {
      const response = await fetch('http://172.22.192.1:3001/api/team', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teamName, imageSrc }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Actualiza el equipo local (si es necesario)
      await fetchTeams(); // Refresh the list of teams
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
            />
          </Form.Group>

          <Form.Group controlId="formImageSelect">
            <Form.Label>Selecciona una imagen</Form.Label>
            <div>
              <img
                src="image1.jpg"
                alt="Image 1"
                onClick={() => setImageSrc('image1.jpg')}
                style={{ cursor: 'pointer', border: imageSrc === 'image1.jpg' ? '2px solid blue' : 'none' }}
              />
              <img
                src="image2.jpg"
                alt="Image 2"
                onClick={() => setImageSrc('image2.jpg')}
                style={{ cursor: 'pointer', border: imageSrc === 'image2.jpg' ? '2px solid blue' : 'none' }}
              />
              <img
                src="image3.jpg"
                alt="Image 3"
                onClick={() => setImageSrc('image3.jpg')}
                style={{ cursor: 'pointer', border: imageSrc === 'image3.jpg' ? '2px solid blue' : 'none' }}
              />
            </div>
          </Form.Group>

          <Button variant="success" onClick={createTeam}>
            Crear Equipo
          </Button>
        </Form>
      ) : (
        <Row>
          {teams.map((team) => (
              <TeamCard
                teamName={team.teamName}
                imageSrc={team.imageSrc}
                vulnerabilities={team.vulnerabilities}
                flags={team.flags}
              />
          ))}
        </Row>
      )}

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
        <Button variant="success" onClick={submitFlag}>
          Enviar Flag
        </Button>
      </Form>

      {hint && <p className="text-info">{hint}</p>}
    </Container>
  );
};

export default Teams;

