const modeloProducto = require('../models/productos.model')

exports.buscar =  async (req, res) => {
    let resultado = await modeloProducto.find({});
    console.log(resultado);

    if (resultado) {
        res.json({ "mensaje": resultado });
    } else {
        res.json({ "mensaje": "hubo un error" });
    }
};

exports.buscarProducto =  async (req, res) => {
        const productoEncontrado ={
            "referencia": req.params.href,
            "nombre": req.body.nombreProducto,
            "precio": req.body.precioProducto,
        };
        let actualizacion = await modeloProducto.findOne({"referencia":req.params.href}, productoEncontrado);
        if (actualizacion)
            res.status(200).json({"mensaje": "actualizacion exitoso"});
    else
    res.status(404).json({"mensaje": "se presento un error"});
}

exports.crearProducto =  async (req, res) => {
    const nuevoProducto ={
        "referencia":req.body.referencia,
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto,
    };
    let insercion = await modeloProducto.create(nuevoProducto);
    if (insercion)
        res.status(200).json({"mensaje": "Registro exitoso"});
    else
    res.status(404).json({"mensaje": "se presento un error"});
}

exports.modificarProducto = async (req, res) => {
    const productoEditado ={
        "referencia": req.params.href,
        "nombre": req.body.nombreProducto,camisa,
        "precio": req.body.precioProducto,
    };
    let actualizacion = await modeloProducto.findOneAndUpdate({"referencia":req.params.href}, productoEditado);
    if (actualizacion)
        res.status(200).json({"mensaje": "actualizacion exitoso"});
    else
    res.status(404).json({"mensaje": "se presento un error"});
}