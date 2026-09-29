import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Contacto } from './pages/Contacto';
import { Artistas } from './pages/Artistas';
import { Obras } from './pages/Obras';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta privada protegida */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
