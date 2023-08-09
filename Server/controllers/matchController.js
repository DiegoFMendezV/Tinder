const Match = require('../Models/matchModel')

exports.getAllMatch = async (req, res)=>{
    const match = await Match.find()
    return res.status(200).json(match)
}

exports.getOneMatch = async (req, res)=>{
    const { id } = req.params;
    const match = await Match.findById(id)
    return res.status(200).json(match)
}

// function Match(){
//     if (necesidad === habilidad && ubicacion === ubicacion) {
//         console.log('Hiciste Match')
//     }else{
//         console.log('Sigue Buscando')
//     }
// }
// Match()