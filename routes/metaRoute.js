const express = require('express')
const router = express.Router()
const metaController = require('../controller/metaController')

router.get('/about-page',  metaController.about_get)
router.post('/about-page', metaController.about_post)
router.get('/terms-page',  metaController.terms_get)
router.post('/terms-page', metaController.terms_post)
router.get('/privacy-page',  metaController.privacy_get)
router.post('/privacy-page', metaController.privacy_post)
router.get('/contact-page', metaController.contact_get)
router.post('/contact-page', metaController.contact_post)

module.exports = router