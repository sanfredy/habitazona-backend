import React from "react";

function ListaPublicaciones({ publicaciones, cargando }) {
  if (cargando) return <p className="text-center">⏳ Cargando publicaciones...</p>;
  if (!publicaciones || publicaciones.length === 0) return <p className="text-center">📭 No se encontraron publicaciones.</p>;

  return (
    <div className="row">
      {publicaciones.map((pub) => (
        <div key={pub._id} className="col-md-4 mb-4">
          <div className="card h-100">
            {/* Carrusel de imágenes si hay más de una */}
            {pub.imagenes && pub.imagenes.length > 0 && (
              <div
                id={`carousel-${pub._id}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {pub.imagenes.map((img, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${img}`}
                        className="d-block w-100"
                        alt={`imagen ${index + 1}`}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
                {pub.imagenes.length > 1 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${pub._id}`}
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" />
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${pub._id}`}
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" />
                    </button>
                  </>
                )}
              </div>
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
                <a href={`mailto:${pub.email}`} className="btn btn-primary btn-sm">
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
