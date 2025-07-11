import React, { useEffect, useState } from 'react';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/publicaciones')
      .then(res => res.json())
      .then(data => setPublicaciones(data));
  }, []);

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {publicaciones.map(p => (
          <li key={p.id}>
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
