const express = require('express')
const router = express.Router()
const empresaRouter = require('./empresaRoutes')
const clienteRouter = require('./clienteRoutes')
const matchRouter = require('./matchRoutes')

router.use('/', empresaRouter)
router.use('/', clienteRouter)
router.use('/', matchRouter)

module.exports = router