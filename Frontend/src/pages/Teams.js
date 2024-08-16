import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TeamCard from '../components/TeamCard';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState('');
  const [hint, setHint] = useState(null);

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
    } catch (error) {
      console.error('Error fetching teams:', error);
      setError('Error fetching teams');
    } finally {
      setLoading(false);
    }
  };

  const submitFlag = async () => {
    try {
      const response = await fetch('http://172.22.192.1:3001/api/submitFlag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flag }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.correct) {
        setHint(data.hint);
      } else {
        setHint('Flag incorrecta. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting flag:', error);
      setHint('Error al enviar la flag');
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Container className="p-4 bg-primary dark:bg-background">
      <Button
        onClick={fetchTeams}
        variant="primary"
        className="mb-4"
      >
        Actuizar Equipos
      </Button>


      <Row>
        {teams.map((team) => (
          <Col key={team.id} md={6} lg={4} className="mb-4">
            <TeamCard
              teamName={team.teamName}
              imageSrc={team.imageSrc}
              vulnerabilities={team.vulnerabilities}
              flags={team.flags}
            />
          </Col>
        ))}
      </Row>
      
      {loading && <p>Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}

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
