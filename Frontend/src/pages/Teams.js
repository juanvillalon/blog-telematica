import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TeamCard from '../components/TeamCard';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://172.22.192.1:3001/api/team'); // Asegúrate de usar http:// o https://
      
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
        Actualizar Equipos
      </Button>

      {loading && <p>Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}

      <Row>
        {teams.map((team) => (
          <Col key={team.id} md={6} lg={4} className="mb-4">
            <TeamCard
              teamName={team.teamName}
              imageSrc={team.imageSrc}
              vulnerabilities={team.vulnerabilities}
              life1={team.life1}
              life2={team.life2}
              flags={team.flags}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Teams;
