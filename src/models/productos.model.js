const mongoose = require('../config/database');
//const {Schema, Types, connection} =require('../config/database');

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: Number,
        required: true
    },
    nombre: {
        type: String, 
        required: true, 
    },
    precio: {
        type: [mongoose.Schema.Decimal128,""],
        default: 0.0,
        min: 0.0
    }
},{versionKey: false});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;

