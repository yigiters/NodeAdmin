const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const isLogin = require('../isLogin')

router.post('/add-user', isLogin, userController.new_user)
router.get('/list-user', isLogin, userController.list_user)
router.get('/delete-user', isLogin, userController.delete_user)
router.get('/edit-user', isLogin, userController.get_edit_user)
router.post('/edit-user', isLogin, userController.post_edit_user)

module.exports = router