const express = require('express')
const router = express.Router()
const indexController = require('../controller/indexController')
const isLogin = require('../isLogin')

router.get('/mypanel', isLogin, indexController.admin_get)
router.get('/add-user', isLogin, indexController.add_user)
router.get('/login', indexController.get_login)
router.post('/login', indexController.post_login)
router.get('/logout', isLogin, indexController.logout)
router.get('/install', indexController.install)
router.get('/default-user', indexController.default_user)

module.exports = router