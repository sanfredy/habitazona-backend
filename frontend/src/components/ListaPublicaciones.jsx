import React from "react";

function ListaPublicaciones({ publicaciones, cargando }) {
  if (cargando) {
    return <p className="text-center">⏳ Cargando publicaciones...</p>;
  }

  if (publicaciones.length === 0) {
    return <p className="text-center">📭 No se encontraron coincidencias.</p>;
  }

  return (
    <div className="row">
      {publicaciones.map((pub) => (
        <div key={pub._id} className="col-md-4 mb-4">
          <div className="card h-100">
            {pub.imagen && (
              <img
                src={`http://localhost:5000/uploads/${pub.imagen}`}
                alt={pub.titulo}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{pub.titulo}</h5>
              <p className="card-text">{pub.descripcion}</p>
              <p><strong>Zona:</strong> {pub.zona}</p>
            </div>
            <div className="card-footer text-center">
              {pub.whatsapp && (
                <a
                  href={`https://wa.me/${pub.whatsapp}`}
                  className="btn btn-success btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              )}
              {pub.email && (
                <a
                  href={`mailto:${pub.email}`}
                  className="btn btn-primary btn-sm"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaPublicaciones;
