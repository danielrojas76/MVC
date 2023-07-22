const express = require('express');
let productosController = require('../controllers/productoController.js')

let router = express.Router();

router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios)

module.exports = router;