import React, { useState } from "react";
import axios from "axios";

function FormularioPublicacion({ onPublicar }) {
  const [formulario, setFormulario] = useState({
    titulo: "",
    descripcion: "",
    email: "",
    whatsapp: "",
    zona: "",
  });

  const [imagenes, setImagenes] = useState([]);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleImagenes = (e) => {
    const archivos = Array.from(e.target.files).slice(0, 3); // máximo 3
    setImagenes(archivos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setEnviado(false);

    try {
      const formData = new FormData();

      // Añadir campos de texto
      Object.entries(formulario).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Añadir imágenes
      imagenes.forEach((img) => formData.append("imagenes", img));

      await axios.post(`${import.meta.env.VITE_API_URL}/publicaciones`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEnviado(true);
      setFormulario({
        titulo: "",
        descripcion: "",
        email: "",
        whatsapp: "",
        zona: "",
      });
      setImagenes([]);

      if (onPublicar) onPublicar();
    } catch (err) {
      console.error("Error al publicar:", err);
      setError(true);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">📝 Publicar habitación o apartaestudio</h2>

      {enviado && <div className="alert alert-success">✅ ¡Publicación enviada correctamente!</div>}
      {error && <div className="alert alert-danger">❌ Error al enviar publicación.</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Zona o localidad</label>
          <select
            className="form-select"
            name="zona"
            value={formulario.zona}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una zona</option>

            <optgroup label="📍 Bogotá - Zona Norte">
              <option value="Usaquén">Usaquén</option>
              <option value="Chapinero">Chapinero</option>
              <option value="Suba">Suba</option>
              <option value="Barrios Unidos">Barrios Unidos</option>
              <option value="Teusaquillo (norte)">Teusaquillo (norte)</option>
            </optgroup>

            <optgroup label="📍 Bogotá - Zona Sur">
              <option value="Bosa">Bosa</option>
              <option value="Kennedy (sur)">Kennedy (sur)</option>
              <option value="Tunjuelito">Tunjuelito</option>
              <option value="Ciudad Bolívar">Ciudad Bolívar</option>
              <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
              <option value="San Cristóbal">San Cristóbal</option>
              <option value="Usme">Usme</option>
            </optgroup>

            <optgroup label="📍 Bogotá - Zona Occidente">
              <option value="Engativá">Engativá</option>
              <option value="Fontibón">Fontibón</option>
              <option value="Kennedy (norte)">Kennedy (norte)</option>
              <option value="Teusaquillo (occidente)">Teusaquillo (occidente)</option>
            </optgroup>

            <optgroup label="📍 Bogotá - Zona Oriente">
              <option value="Santa Fe">Santa Fe</option>
              <option value="La Candelaria">La Candelaria</option>
              <option value="San Cristóbal (oriente)">San Cristóbal (oriente)</option>
              <option value="Usaquén (oriente)">Usaquén (oriente)</option>
            </optgroup>

            <optgroup label="🏞️ Municipios - Zona Norte">
              <option value="Chía">Chía</option>
              <option value="Cajicá">Cajicá</option>
              <option value="Zipaquirá">Zipaquirá</option>
              <option value="Tocancipá">Tocancipá</option>
              <option value="Sopó">Sopó</option>
              <option value="La Calera">La Calera</option>
            </optgroup>

            <optgroup label="🏞️ Municipios - Zona Sur">
              <option value="Soacha">Soacha</option>
              <option value="Sibaté">Sibaté</option>
              <option value="Pasca">Pasca</option>
              <option value="Fusagasugá">Fusagasugá</option>
              <option value="Granada">Granada</option>
            </optgroup>

            <optgroup label="🏞️ Municipios - Zona Occidente">
              <option value="Mosquera">Mosquera</option>
              <option value="Funza">Funza</option>
              <option value="Madrid">Madrid</option>
              <option value="Facatativá">Facatativá</option>
              <option value="El Rosal">El Rosal</option>
              <option value="Bojacá">Bojacá</option>
              <option value="Zipacón">Zipacón</option>
            </optgroup>

            <optgroup label="🏞️ Municipios - Zona Oriente">
              <option value="Choachí">Choachí</option>
              <option value="Ubaque">Ubaque</option>
              <option value="Fómeque">Fómeque</option>
              <option value="Chipaque">Chipaque</option>
              <option value="Guasca">Guasca</option>
            </optgroup>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Número de WhatsApp</label>
          <input
            type="text"
            className="form-control"
            name="whatsapp"
            value={formulario.whatsapp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subir imágenes (máximo 3)</label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/*"
            onChange={handleImagenes}
          />
        </div>

        <button type="submit" className="btn btn-primary">Publicar</button>
      </form>
    </div>
  );
}

export default FormularioPublicacion;
