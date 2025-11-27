const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productosRoute');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'API REST de Productos',
    version: '1.0.0',
    endpoints: {
      productos: '/api/productos'
    }
  });
});

app.use('/api/productos', productoRoutes);

app.use(errorHandler);

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

module.exports = app;