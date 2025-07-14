const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exponer carpeta de imágenes al navegador (para ver desde React)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('🟢 Conectado a MongoDB Atlas'))
.catch(err => console.error('🔴 Error conectando a MongoDB:', err));

// Rutas
app.use('/api/publicaciones', require('./routes/publicaciones'));

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('✅ API de Habitazona funcionando.');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
