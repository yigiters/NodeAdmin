const express = require('express')
const router = express.Router()
const articlesController = require('../controller/articleController')
const isLogin = require('../isLogin')

router.get('/new-post', isLogin, articlesController.get_new_article)
router.post('/new-post', isLogin, articlesController.post_new_article)
router.get('/list-post', isLogin, articlesController.get_list_article)
router.get('/delete-post', isLogin, articlesController.delete_article)
router.get('/edit-post', isLogin, articlesController.get_edit_article)
router.post('/edit-post', isLogin, articlesController.post_edit_article)

module.exports = router