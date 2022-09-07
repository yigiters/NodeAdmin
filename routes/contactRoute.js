const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')

router.get('/contact-form', contactController.contact_get)
router.get('/contact/read', contactController.contact_read)
router.get('/contact/delete', contactController.contact_delete)

module.exports = router