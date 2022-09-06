const Contact = require('../model/contactModel')

const contact_get = (req,res) => {
    res.render('panel-contact', {auth: req.session.user})
}

module.exports = {
    contact_get,
}