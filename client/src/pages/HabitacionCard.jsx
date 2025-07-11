import React from 'react';

function HabitacionCard({ habitacion }) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{habitacion.nombre}</h3>
      <p>{habitacion.descripcion}</p>
      <strong>${habitacion.precio}</strong>
    </div>
  );
}

export default HabitacionCard;
