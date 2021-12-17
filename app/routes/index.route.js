const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')

router.get('/iecho', (req, res) => {
  controller.reverseText(req, res)
})

module.exports = router
