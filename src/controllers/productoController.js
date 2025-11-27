const Producto = require('../models/Productos');

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({
      success: true,
      count: productos.length,
      data: productos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos',
      error: error.message
    });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      data: producto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el producto',
      error: error.message
    });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: producto
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear el producto',
      error: error.message
    });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Producto actualizado exitosamente',
      data: producto
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar el producto',
      error: error.message
    });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Producto eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el producto',
      error: error.message
    });
  }
};