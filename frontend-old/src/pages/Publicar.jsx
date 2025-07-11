import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FormularioPublicacion from '../components/FormularioPublicacion';

function Publicar() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="text-start mb-3">
          <Link to="/" className="btn btn-outline-secondary">
            ← Volver al inicio
          </Link>
        </div>
        <h1 className="text-center mb-4">📤 Publicar Habitación</h1>
        <FormularioPublicacion />
      </div>
    </>
  );
}

export default Publicar;
