import React, { useState } from 'react';
import axios from '../services/api';

function Crear() {
  const [form, setForm] = useState({ nombre: '', precio: '', descripcion: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/habitaciones', form);
      alert('Habitación creada con éxito');
      setForm({ nombre: '', precio: '', descripcion: '' });
    } catch (err) {
      console.error(err);
      alert('Error al crear habitación');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Habitación</h2>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} required />
      <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
      <button type="submit">Crear</button>
    </form>
  );
}

export default Crear;
