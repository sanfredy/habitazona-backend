import React, { useState } from 'react';
import axios from 'axios';

const Formulario = ({ onPublicar }) => {
  const [form, setForm] = useState({
    titulo: '',
    descripcion: '',
    zona: '',
    precio: '',
    contacto: '',
    imagen: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const res = await axios.post('http://localhost:5000/api/publicaciones', form);
      setMensaje('✅ Publicación enviada con éxito.');
      setForm({
        titulo: '',
        descripcion: '',
        zona: '',
        precio: '',
        contacto: '',
        imagen: ''
      });

      if (onPublicar) onPublicar(); // Para refrescar lista si es necesario
    } catch (error) {
      console.error(error);
      setMensaje('❌ Error al enviar la publicación.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>📤 Publicar nueva habitación</h2>

      {mensaje && <p style={{ color: mensaje.includes('Error') ? 'red' : 'green' }}>{mensaje}</p>}

      {['titulo', 'descripcion', 'zona', 'precio', 'contacto', 'imagen'].map((field) => (
        <div key={field} style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            type={field === 'precio' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            required={field !== 'imagen'}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
      ))}

      <button type="submit" style={{ padding: '10px 20px', background: '#007acc', color: '#fff', border: 'none' }}>
        Publicar
      </button>
    </form>
  );
};

export default Formulario;
