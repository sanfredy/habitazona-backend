import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/publicaciones')
      .then((response) => {
        setPublicaciones(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las publicaciones:', error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Publicaciones desde la API</h1>
      {publicaciones.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>No hay publicaciones disponibles.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
          {publicaciones.map((pub) => (
            <li key={pub.id} style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem 1.5rem',
              marginBottom: '1.2rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#007acc' }}>{pub.titulo}</h3>
              <p style={{ margin: 0, color: '#444' }}>{pub.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
