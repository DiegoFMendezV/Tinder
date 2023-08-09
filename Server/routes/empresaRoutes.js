const express = require('express')
const router = express.Router()
const empresaController = require('../controllers/empresaController')

router.get('/empresas', empresaController.getAllEmpresas)
router.get('/empresas/:id', empresaController.getOneEmpresa)
router.post('/empresas', empresaController.createEmpresas)
router.patch('/empresas/:id', empresaController.updateEmpresa)
router.delete('/empresas/:id', empresaController.deleteEmpresa)


module.exports = router;