import React from 'react';

function Filtros({ filtroZona, setFiltroZona, busqueda, setBusqueda }) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
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
          value={filtroZona}
          onChange={(e) => setFiltroZona(e.target.value)}
        >
          <option value="">Todas las zonas</option>
          {[
            "Suba", "Chapinero", "Teusaquillo", "Engativá", "Kennedy",
            "Soacha", "Chía", "Mosquera", "Funza", "Facatativá", "Zipaquirá"
          ].map((zona) => (
            <option key={zona} value={zona}>{zona}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filtros;
