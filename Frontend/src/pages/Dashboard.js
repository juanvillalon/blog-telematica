// src/pages/Dashboard.js
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f0f8ff;
  min-height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;



const Dashboard = () => {





  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Felicidades eres admin!!</SectionTitle>
        <h3>Flag suprema</h3>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
