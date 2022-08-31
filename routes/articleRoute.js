const express = require('express')
const router = express.Router()
const articlesController = require('../controller/articleController')

router.get('/new-post', articlesController.get_new_article)
router.post('/new-post', articlesController.post_new_article)
router.get('/list-post', articlesController.get_list_article)
router.get('/delete-post', articlesController.delete_article)
router.get('/edit-post', articlesController.get_edit_article)
router.post('/edit-post', articlesController.post_edit_article)

module.exports = router