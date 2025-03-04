const exp = require('express')
require('dotenv').config()
const enrutador = require('./routes/router')
const app = exp()
//const modeloProducto = require('./src/models/productos.model')

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());

app.use('/v1', enrutador)


app.listen(process.env.PORT, ()=>{
    console.log(`servidor puerto ${process.env.PORT}`)
})
