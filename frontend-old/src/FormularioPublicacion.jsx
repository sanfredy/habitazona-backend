import React, { useState } from 'react';
import axios from 'axios';

function FormularioPublicacion({ onPublicar }) {
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    email: '',
    whatsapp: '',
    zona: '',
    imagen: null
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagen') {
      setFormulario({ ...formulario, imagen: files[0] });
    } else {
      setFormulario({ ...formulario, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formulario) {
      data.append(key, formulario[key]);
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/publicaciones`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setEnviado(true);
      setFormulario({
        titulo: '',
        descripcion: '',
        email: '',
        whatsapp: '',
        zona: '',
        imagen: null
      });
      if (onPublicar) onPublicar();
    } catch (err) {
      console.error('Error al publicar:', err);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">📝 Publicar habitación o apartaestudio</h2>

      {enviado && (
        <div className="alert alert-success">✅ ¡Publicación enviada correctamente!</div>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" name="titulo" value={formulario.titulo} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Zona o localidad</label>
          <select className="form-select" name="zona" value={formulario.zona} onChange={handleChange} required>
            <option value="">Seleccione una zona</option>
            <option value="Suba">Suba</option>
            <option value="Chapinero">Chapinero</option>
            <option value="Teusaquillo">Teusaquillo</option>
            <option value="Engativá">Engativá</option>
            <option value="Kennedy">Kennedy</option>
            <option value="Soacha">Soacha</option>
            <option value="Chía">Chía</option>
            <option value="Mosquera">Mosquera</option>
            <option value="Funza">Funza</option>
            <option value="Facatativá">Facatativá</option>
            <option value="Zipaquirá">Zipaquirá</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" name="descripcion" value={formulario.descripcion} onChange={handleChange} rows="3" required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" name="email" value={formulario.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Número de WhatsApp</label>
          <input type="text" className="form-control" name="whatsapp" value={formulario.whatsapp} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input type="file" className="form-control" name="imagen" accept="image/*" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Publicar</button>
      </form>
    </div>
  );
}

export default FormularioPublicacion;
