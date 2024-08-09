// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext'; // Importa el contexto
import LandingPage from './pages/LandingPage';
import Comments from './pages/Comments';
import Curriculum from './pages/Curriculum';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
