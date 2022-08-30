const express = require('express')
const router = express()
const categoryController = require('../controller/categoryController')

router.get('/create-category-table', categoryController.create_category_table)
router.post('/new-category', categoryController.new_category)
router.get('/list-category', categoryController.list_category)
router.post('/func-category', categoryController.func_category)

module.exports = router