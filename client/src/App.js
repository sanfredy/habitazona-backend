import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Formulario from './Formulario';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  // Cargar publicaciones desde el backend
  const cargarPublicaciones = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/publicaciones');
      setPublicaciones(res.data);
    } catch (err) {
      console.error('Error al cargar publicaciones:', err);
    }
  };

  // Al cargar el componente, obtener publicaciones
  useEffect(() => {
    cargarPublicaciones();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🏠 Habitazona – Portal de Arriendos</h1>

      <Formulario onPublicar={cargarPublicaciones} />

      <h2 style={{ marginTop: '3rem' }}>📋 Publicaciones disponibles</h2>
      {publicaciones.length === 0 ? (
        <p>No hay publicaciones aún.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {publicaciones.map((pub) => (
            <li key={pub._id} style={{
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>{pub.titulo} – 💰 ${pub.precio}</h3>
              <p><strong>Zona:</strong> {pub.zona}</p>
              <p>{pub.descripcion}</p>
              <p><strong>Contacto:</strong> {pub.contacto}</p>
              {pub.imagen && (
                <img
                  src={pub.imagen}
                  alt="Publicación"
                  style={{ width: '100px', borderRadius: '4px', marginTop: '10px' }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
