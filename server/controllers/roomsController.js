const Room = require('../models/Room');

// Obtener todas las habitaciones
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener habitaciones' });
  }
};

// Crear una habitación
exports.createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear habitación' });
  }
};
