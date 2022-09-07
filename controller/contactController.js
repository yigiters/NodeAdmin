const Contact = require('../model/contactModel')

const contact_get = (req,res) => {

    Contact.findAll().then(result => {
        res.render('panel-contact', {auth: req.session.user, data: result})
    })

}

const contact_read = (req,res) => {
    Contact.findOne({
        where: {
            id: req.query.id
        }
    }).then(result => {
    
        Contact.update({state: '1'}, {
            where: {
                id: req.query.id
            }
        })
        if(result.state == 0) {
            result1 = "Okunmadı"
        } else {
            result1 = "Okundu"
        }
        res.render('panel-contact-read', {auth: req.session.user, data: result, state: result1})
    })
}

const contact_delete = (req,res) => {
    Contact.destroy({
        where: {
            id: req.query.id
        }
    })
    res.redirect('/contact-form')
}

module.exports = {
    contact_get,
    contact_read,
    contact_delete,
}