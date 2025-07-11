import React from 'react';
import HabitacionCard from '../components/HabitacionCard';

const Home = () => {
  const habitaciones = [
    {
      nombre: 'Habitación 1',
      descripcion: 'Cómoda y bien iluminada',
      precio: 120000,
    },
    {
      nombre: 'Habitación 2',
      descripcion: 'Ideal para estudiantes',
      precio: 90000,
    },
  ];

  return (
    <div>
      <h1>Listado de Habitaciones</h1>
      {habitaciones.map((habitacion, index) => (
        <HabitacionCard key={index} habitacion={habitacion} />
      ))}
    </div>
  );
};

export default Home;
