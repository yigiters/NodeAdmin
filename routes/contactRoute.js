const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')
const isLogin = require('../isLogin')

router.get('/contact-form', isLogin, contactController.contact_get)
router.get('/contact/read', isLogin, contactController.contact_read)
router.get('/contact/delete', isLogin, contactController.contact_delete)

module.exports = router