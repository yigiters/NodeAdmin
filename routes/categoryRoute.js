const express = require('express')
const router = express()
const categoryController = require('../controller/categoryController')
const isLogin = require('../isLogin')

router.post('/new-category', isLogin, categoryController.new_category)
router.get('/list-category', isLogin, categoryController.list_category)
router.post('/func-category', isLogin, categoryController.func_category)

module.exports = router