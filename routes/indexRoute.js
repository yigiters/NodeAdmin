const express = require('express')
const router = express.Router()
const indexController = require('../controller/indexController')

router.get('/mypanel', indexController.admin_get)
router.get('/add-user', indexController.add_user)
router.get('/login', indexController.get_login)
router.post('/login', indexController.post_login)
router.get('/logout', indexController.logout)

module.exports = router