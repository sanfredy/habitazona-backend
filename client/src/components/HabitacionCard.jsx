import React from 'react';

const HabitacionCard = ({ habitacion }) => {
  return (
    <div className="habitacion-card">
      <h3>{habitacion.nombre}</h3>
      <p>{habitacion.descripcion}</p>
      <p><strong>Precio:</strong> ${habitacion.precio}</p>
    </div>
  );
};

export default HabitacionCard;
