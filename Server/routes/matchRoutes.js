const express = require('express')
const router = express.Router()
const matchController = require('../controllers/matchController')

router.get('/matches', matchController.getAllMatch)
router.get('/matches/:id', matchController.getOneMatch)

module.exports = router;