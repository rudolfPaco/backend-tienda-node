// importar modulos
const express = require('express')
const routes = require('./routes/index')

// declaracion de variables aux
const PORT = 3000
const HOST = '127.0.0.1'

// configurar modulos
var app = express()

// habilitacion de rutas
routes.adicionar(app)

// middlewares


// levantar el servidor
app.listen(PORT, HOST, () => {
    console.log(`el servidor http://${HOST} esta levantado en el port: ${PORT}`)
})