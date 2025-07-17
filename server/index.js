const express = require('express');
const cors = require('cors');

const app = express();
// ¡CORREGIDO! Usa process.env.PORT para que Vercel asigne el puerto dinámicamente
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/publicaciones', (req, res) => {
  res.json([
    { id: 1, titulo: 'Primera publicación', descripcion: 'Contenido de la primera publicación' },
    { id: 2, titulo: 'Segunda publicación', descripcion: 'Contenido de la segunda publicación' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
