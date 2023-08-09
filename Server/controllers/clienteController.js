const Cliente = require('../Models/clienteModel')

exports.getAllClientes = async (req, res)=>{
    const clientes = await Cliente.find()
    return res.status(200).json(clientes)
}

exports.getOneCliente = async (req, res)=>{
    const { id } = req.params;
    const cliente = await Cliente.findById(id)
    return res.status(200).json(cliente)
}

exports.createClientes = async (req, res)=>{
    const newCliente = new Cliente({...req.body})
    const insertedCliente = await newCliente.save()
    return res.status(201).json(insertedCliente)
}

exports.updateCliente = async (req, res)=>{
    const { id } = req.params;
    await Cliente.updateOne({_id: id}, {...req.body})
    const updatedCliente = await Cliente.findById(id)
    return res.status(200).json(updatedCliente)
}
 
exports.deleteCliente = async (req, res)=>{
    const { id } = req.params;
    const ClienteToDelete = await Cliente.findByIdAndDelete(id)
    return res.status(202).json(ClienteToDelete)
} 