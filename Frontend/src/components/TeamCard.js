import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TeamCard = ({ teamName, imageSrc, vulnerabilities, life1, life2, flags }) => {
  return (
    <div className="relative border border-border rounded-lg p-4 bg-card dark:bg-card">
      <h2 className="text-lg font-bold text-center mb-2 text-accent-foreground dark:text-primary-foreground">
        {teamName}
      </h2>
      <div className="flex justify-center">
        <div className="border-4 border-primary rounded-lg overflow-hidden">
          <img src={imageSrc} alt={teamName} className="mx-auto mb-4" />
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
                    className={`form-checkbox h-5 w-5 ${"text-green-500 dark:text-green-400"} mr-2`}
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
                Banderas:
              </h3>
              {flags.map((flag, index) => (
                <div className="flex items-center cursor-pointer" key={index}>
                  <input
                    type="checkbox"
                    className={`form-checkbox h-5 w-5 ${"text-green-500 dark:text-green-400"} mr-2`}
                    readOnly
                  />
                  <label className="text-accent-foreground dark:text-primary-foreground">
                    {flag.label}
                  </label>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </div>
  );
};

export default TeamCard;
