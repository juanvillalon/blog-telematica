import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TeamCard = ({ teamName, imageSrc, vulnerabilities, lives, flags }) => {
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
                    className={`form-checkbox h-5 w-5 ${
                      vuln.safe
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    } mr-2`}
                    checked={vuln.checked}
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
                    className={`form-checkbox h-5 w-5 ${
                      flag.safe
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    } mr-2`}
                    checked={flag.checked}
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
          <Col>
            <div className="mt-4 flex">
              <span className="font-semibold mr-4 text-accent-foreground dark:text-primary-foreground">
                Vidas:
              </span>
              {lives.map((life, index) => (
                <div className="flex items-center cursor-pointer" key={index}>
                  <input
                    type="checkbox"
                    className={`form-checkbox h-5 w-5 ${
                      life
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    } mr-2`}
                    checked={life}
                    readOnly
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-primary dark:bg-background">
      <Container>
        <Row>
          <Col>
            <TeamCard
              teamName="Team 1"
              imageSrc="https://placehold.co/200x200"
              vulnerabilities={[
                { label: "vulnerabilidad 1", checked: true, safe: true },
                { label: "vulnerabilidad 2", checked: false, safe: false },
                { label: "vulnerabilidad 3", checked: false, safe: false },
              ]}
              lives={[true, false]}
              flags={[
                { label: "Bandera 1", checked: true, safe: true },
                { label: "Bandera 2", checked: false, safe: false },
                { label: "Bandera 3", checked: false, safe: false },
              ]}
            />
          </Col>
          <Col>
            <TeamCard
              teamName="Team 2"
              imageSrc="https://placehold.co/200x200"
              vulnerabilities={[
                { label: "vulnerabilidad 1", checked: true, safe: true },
                { label: "vulnerabilidad 2", checked: false, safe: false },
                { label: "vulnerabilidad 3", checked: false, safe: false },
              ]}
              lives={[true, false]}
              flags={[
                { label: "Bandera A", checked: true, safe: true },
                { label: "Bandera B", checked: false, safe: false },
                { label: "Bandera C", checked: false, safe: false },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Teams;
