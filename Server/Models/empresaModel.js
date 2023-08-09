const mongoose = require('mongoose')

const empresaSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    necesidad:{
        type: String,
        required: true
    }
})
const Empresa = mongoose.model("Empresa", empresaSchema)
module.exports = Empresa