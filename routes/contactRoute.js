const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')

router.get('/contact-form', contactController.contact_get)

module.exports = router