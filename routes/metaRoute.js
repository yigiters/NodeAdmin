const express = require('express')
const router = express.Router()
const metaController = require('../controller/metaController')
const isLogin = require('../isLogin')

router.get('/about-page', isLogin,  metaController.about_get)
router.post('/about-page', isLogin, metaController.about_post)
router.get('/terms-page', isLogin,  metaController.terms_get)
router.post('/terms-page', isLogin, metaController.terms_post)
router.get('/privacy-page', isLogin,  metaController.privacy_get)
router.post('/privacy-page', isLogin, metaController.privacy_post)
router.get('/contact-page', isLogin, metaController.contact_get)
router.post('/contact-page', isLogin, metaController.contact_post)
router.get('/site-page', isLogin, metaController.site_get)
router.post('/site-page', isLogin, metaController.site_post)

module.exports = router