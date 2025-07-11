import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Filtros from './components/Filtros';
import ListaPublicaciones from './components/ListaPublicaciones';
import Navbar from './components/Navbar';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacionesFiltradas, setPublicacionesFiltradas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroZona, setFiltroZona] = useState('');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/publicaciones`)
      .then((res) => {
        setPublicaciones(res.data);
        setPublicacionesFiltradas(res.data);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al obtener publicaciones:', err);
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    const resultado = publicaciones.filter((pub) => {
      const coincideZona = filtroZona ? pub.zona === filtroZona : true;
      const coincideTexto = (
        pub.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        pub.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
      return coincideZona && coincideTexto;
    });
    setPublicacionesFiltradas(resultado);
  }, [filtroZona, busqueda, publicaciones]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">🏠 Habitazona</h1>

        <Filtros
          filtroZona={filtroZona}
          setFiltroZona={setFiltroZona}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <ListaPublicaciones
          publicaciones={publicacionesFiltradas}
          cargando={cargando}
        />
      </div>
    </>
  );
}

export default App;
