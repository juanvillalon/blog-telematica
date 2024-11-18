import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import Comments from './pages/Comments';
import Curriculum from './pages/Curriculum';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/comments" element={
              <ProtectedRoute requiredRole="user" redirectTo="/comments">
                <Comments />
              </ProtectedRoute>
            } />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/dashboard" element={
              <ProtectedRoute requiredRole="admin" redirectTo="/dashboard">
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
