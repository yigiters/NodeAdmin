const express = require('express')
const router = express.Router()
const apiController = require('../controller/apiController')

router.get('/api/posts', apiController.all_articles)
router.get('/api/post', apiController.select_articles)
router.get('/api/categories', apiController.all_category)
router.get('/api/category', apiController.select_category)
router.get('/api/highlight', apiController.higlight_post)
router.get('/api/meta', apiController.about_meta)

module.exports = router