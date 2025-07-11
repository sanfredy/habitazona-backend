import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Filtros from './components/Filtros'
import ListaPublicaciones from './components/ListaPublicaciones'
import FormularioPublicacion from './components/FormularioPublicacion'

// Página de inicio: buscar y listar publicaciones
function Home() {
  const [filtroZona, setFiltroZona] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [publicaciones, setPublicaciones] = useState([])
  const [cargando, setCargando] = useState(true)

  const cargarPublicaciones = () => {
    fetch(`${import.meta.env.VITE_API_URL}/publicaciones`)
      .then(res => res.json())
      .then(data => {
        setPublicaciones(data)
        setCargando(false)
      })
      .catch(err => {
        console.error('Error cargando publicaciones:', err)
        setCargando(false)
      })
  }

  useEffect(() => {
    cargarPublicaciones()
  }, [])

  const publicacionesFiltradas = publicaciones.filter((pub) => {
    const coincideZona = filtroZona ? pub.zona === filtroZona : true
    const coincideTexto =
      pub.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      pub.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return coincideZona && coincideTexto
  })

  return (
    <div className="container mt-4">
      <h2 className="mb-3">📋 Publicaciones disponibles</h2>

      <Filtros
        zona={filtroZona}
        setZona={setFiltroZona}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <ListaPublicaciones publicaciones={publicacionesFiltradas} cargando={cargando} />
    </div>
  )
}

// Página para publicar
function Publicar() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">📝 Publicar habitación</h2>
      <FormularioPublicacion />
    </div>
  )
}

// Página 404
function NoEncontrado() {
  return (
    <div className="container mt-5 text-center">
      <h1>🚫 404</h1>
      <p>Página no encontrada</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  )
}

export default App
