import React from "react";

function Filtros({ zona, setZona, busqueda, setBusqueda }) {
  return (
    <div className="row mb-4">
      <div className="col-md-6 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Buscar por título o descripción..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <select
          className="form-select"
          value={zona}
          onChange={(e) => setZona(e.target.value)}
        >
          <option value="">Todas las zonas</option>

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
    </div>
  );
}

export default Filtros;
