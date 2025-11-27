require('dotenv').config();
const mongoose = require('mongoose');
const Producto = require('../models/Productos');

const productos = [
  {
    nombre: "Laptop HP Pavilion",
    precio: 899.99,
    stock: 15,
    categoria: "Electrónica"
  },
  {
    nombre: "Mouse Logitech MX Master",
    precio: 79.99,
    stock: 50,
    categoria: "Accesorios"
  },
  {
    nombre: "Teclado Mecánico RGB",
    precio: 129.99,
    stock: 30,
    categoria: "Accesorios"
  },
  {
    nombre: "Monitor Samsung 27 pulgadas",
    precio: 299.99,
    stock: 20,
    categoria: "Electrónica"
  },
  {
    nombre: "Auriculares Sony WH-1000XM4",
    precio: 349.99,
    stock: 25,
    categoria: "Audio"
  },
  {
    nombre: "iPhone 15 Pro",
    precio: 1199.99,
    stock: 10,
    categoria: "Smartphones"
  },
  {
    nombre: "Samsung Galaxy S24",
    precio: 999.99,
    stock: 18,
    categoria: "Smartphones"
  },
  {
    nombre: "iPad Air",
    precio: 699.99,
    stock: 12,
    categoria: "Tablets"
  },
  {
    nombre: "Webcam Logitech C920",
    precio: 89.99,
    stock: 40,
    categoria: "Accesorios"
  },
  {
    nombre: "SSD Samsung 1TB",
    precio: 149.99,
    stock: 60,
    categoria: "Almacenamiento"
  },
  {
    nombre: "Disco Duro Externo 2TB",
    precio: 79.99,
    stock: 45,
    categoria: "Almacenamiento"
  },
  {
    nombre: "Router TP-Link AC1750",
    precio: 69.99,
    stock: 35,
    categoria: "Redes"
  },
  {
    nombre: "Cable HDMI 2.1",
    precio: 19.99,
    stock: 100,
    categoria: "Cables"
  },
  {
    nombre: "Cargador USB-C 65W",
    precio: 39.99,
    stock: 80,
    categoria: "Accesorios"
  },
  {
    nombre: "Funda para Laptop 15.6",
    precio: 24.99,
    stock: 55,
    categoria: "Accesorios"
  },
  {
    nombre: "Impresora HP LaserJet",
    precio: 249.99,
    stock: 8,
    categoria: "Oficina"
  },
  {
    nombre: "Escáner Epson",
    precio: 179.99,
    stock: 12,
    categoria: "Oficina"
  },
  {
    nombre: "Micrófono Blue Yeti",
    precio: 129.99,
    stock: 22,
    categoria: "Audio"
  },
  {
    nombre: "Cámara Web 4K",
    precio: 159.99,
    stock: 15,
    categoria: "Video"
  },
  {
    nombre: "Hub USB 3.0 7 puertos",
    precio: 34.99,
    stock: 70,
    categoria: "Accesorios"
  },
  {
    nombre: "Lámpara LED Escritorio",
    precio: 44.99,
    stock: 40,
    categoria: "Iluminación"
  },
  {
    nombre: "Silla Gamer Ergonómica",
    precio: 299.99,
    stock: 10,
    categoria: "Muebles"
  },
  {
    nombre: "Escritorio Ajustable",
    precio: 449.99,
    stock: 5,
    categoria: "Muebles"
  },
  {
    nombre: "Alfombrilla RGB XXL",
    precio: 29.99,
    stock: 65,
    categoria: "Accesorios"
  },
  {
    nombre: "PowerBank 20000mAh",
    precio: 49.99,
    stock: 50,
    categoria: "Energía"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/productos_db');
    console.log('Conectado a MongoDB');

    // Limpiar la colección existente (opcional)
    await Producto.deleteMany({});
    console.log('Colección limpiada');

    await Producto.insertMany(productos);
    console.log(`${productos.length} productos insertados exitosamente`);

    await mongoose.connection.close();
    console.log('Conexión cerrada');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

// Ejecutar el seed
seedDatabase();