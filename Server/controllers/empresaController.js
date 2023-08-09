const Empresa = require('../Models/empresaModel')

exports.getAllEmpresas = async (req, res)=>{
    const empresas = await Empresa.find()
    return res.status(200).json(empresas)
}

exports.getOneEmpresa = async (req, res)=>{
    const { id } = req.params;
    const empresa = await Empresa.findById(id)
    return res.status(200).json(empresa)
}

exports.createEmpresas = async (req, res)=>{
    const newEmpresa = new Empresa({...req.body})
    const insertedEmpresa = await newEmpresa.save()
    return res.status(201).json(insertedEmpresa)
}

exports.updateEmpresa = async (req, res)=>{
    const { id } = req.params;
    await Empresa.updateOne({_id: id}, {...req.body})
    const updatedEmpresa = await Empresa.findById(id)
    return res.status(200).json(updatedEmpresa)
}
 
exports.deleteEmpresa = async (req, res)=>{
    const { id } = req.params;
    const EmpresaToDelete = await Empresa.findByIdAndDelete(id)
    return res.status(202).json(EmpresaToDelete)
} 