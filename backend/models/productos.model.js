const mongoose = require('../conig/database/mongoose');

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: [Number, "la referencia debe ser numerica"],
        required: [true, "la referencia es obligatoria"]
    },
    nombre: {
        type: [String, "nombre debe ser un texto"],
        required: [true, "el nombre debe ser obligatorio"]
    },
    precio: {
        type: [Decimal128, ],
        default: 0.0,
        min: 0.0
    }
},{versionKey: false});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;

