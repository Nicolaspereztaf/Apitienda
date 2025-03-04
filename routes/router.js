const exp = require('express'); 
const router = exp.Router()

const controladorProducto = require('../src/controller/productos.controller')

router.get('/productos', controladorProducto.buscar);
router.get('/productos/:href', controladorProducto.buscarProducto);
router.post('/productos', controladorProducto.crearProducto);
router.put('/productos/:href', controladorProducto.modificarProducto);

module.exports = router