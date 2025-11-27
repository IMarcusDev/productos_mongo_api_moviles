const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  precio: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: [0, 'El precio no puede ser negativo']
  },
  stock: {
    type: Number,
    required: [true, 'El stock es requerido'],
    min: [0, 'El stock no puede ser negativo'],
    default: 0
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es requerida'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Producto', productoSchema);