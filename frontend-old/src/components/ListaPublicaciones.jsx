import React from 'react';
import TarjetaPublicacion from './TarjetaPublicacion';

function ListaPublicaciones({ publicaciones, cargando }) {
  if (cargando) return <p className="text-center">⏳ Cargando publicaciones...</p>;
  if (publicaciones.length === 0) return <p className="text-center">📭 No se encontraron coincidencias.</p>;

  return (
    <div className="row">
      {publicaciones.map((pub) => (
        <TarjetaPublicacion key={pub._id} pub={pub} />
      ))}
    </div>
  );
}

export default ListaPublicaciones;
