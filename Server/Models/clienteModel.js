const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    habilidad:{
        type: String,
        required: true
    }
})
const Cliente = mongoose.model("Cliente", clienteSchema)
module.exports = Cliente