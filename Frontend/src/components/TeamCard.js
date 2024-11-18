import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team1 from '../components/images/team1.jpg';
import team2 from '../components/images/team2.jpg';
import team3 from '../components/images/team3.jpg';
import team4 from '../components/images/team4.png';

const TeamCard = ({ teamName, imageSrc, vulnerabilities, flags }) => {
  // Mapa de strings a imágenes
  const imagesMap = {
    'team1': team1,
    'team2': team2,
    'team3': team3,
    'team4': team4,
    // Puedes agregar más imágenes aquí según sea necesario
  };

  // Seleccionar la imagen basada en el string `imageSrc`
  const selectedImage = imagesMap[imageSrc]; // Usa `noticia1` como predeterminado si no coincide

  return (
    <div className="relative border border-border rounded-lg p-4 bg-card dark:bg-card">
      <h2 className="text-lg font-bold text-center mb-2 text-accent-foreground dark:text-primary-foreground">
        Team {teamName}
      </h2>
      <div className="flex justify-center">
        <div className="d-flex justify-content-around">
          <img src={selectedImage} 
          className="mx-auto mb-4" 
          alt={`${teamName} logo`}
          style={{
            cursor: 'pointer',
            border: imageSrc === 'team1' ? '2px solid blue' : 'none',
            width: '500px',   // Fija el ancho de la imagen
            height: '500px',  // Fija la altura de la imagen
            objectFit: 'cover' // Asegura que la imagen se ajuste al contenedor sin distorsión
          }}
          />
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="mt-2">
              <h3 className="font-semibold mb-2 text-accent-foreground dark:text-primary-foreground">
                Vulnerabilidades:
              </h3>
              {vulnerabilities.map((vuln, index) => (
                <div className="flex items-center cursor-pointer" key={index}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500 dark:text-green-400 mr-2"
                    checked={!vuln.encrypted} // El checkbox está marcado si "safe" es false
                    readOnly
                  />
                  <label className="text-accent-foreground dark:text-primary-foreground">
                    {vuln.label}
                  </label>
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <div className="mt-2">
              <h3 className="font-semibold mb-2 text-accent-foreground dark:text-primary-foreground">
                Flags:
              </h3>
              {flags.map((flag, index) => (
                <div key={index}>
                  <label className="text-accent-foreground dark:text-primary-foreground">
                    {flag.label}
                  </label>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamCard;