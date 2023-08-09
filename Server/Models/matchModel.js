const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
    id_empresa:{
        type: Number,
        required: true
    },
    id_cliente:{
        type: Number,
        required: true
    }
})
const Match = mongoose.model("Match", matchSchema)
module.exports = Match