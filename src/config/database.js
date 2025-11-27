const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/productos_db');
    console.log('Base de datos conectada exitosamente');
  } catch (error) {
    console.error('Error al conectar la base de datos:', error.message);
    process.exit(1);
  }
};