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
        <p>37 34 20 33 33 20 36 63 20 35 66 20 37 35 20 37 34 20 36 36 20 32 34 20 36 64 20 37 62 20 37 30 20 37 37 20 36 65 20 33 33 20 36 34 20 32 65 20 37 37 20 33 33 20 36 32 20 35 33 20 33 31 20 37 34 20 33 33 20 32 64 20 36 37 20 36 61 20 37 64</p>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
