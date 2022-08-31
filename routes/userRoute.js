const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/add-user', userController.new_user)
router.get('/list-user', userController.list_user)
router.get('/delete-user', userController.delete_user)
router.get('/edit-user', userController.get_edit_user)
router.post('/edit-user', userController.post_edit_user)

module.exports = router