const Meta = require('../model/blogMeta')

const about_get = (req,res) => {
    Meta.findOne({
        where: {
            id: "1"
        }
    }).then(result => {
        res.render('meta-about', {auth: req.session.user, data: result.value})
    })
}

const about_post = (req,res) => {
    
    Meta.update({ value: req.body.value }, {
        where: {
          id: 1
        }
      })
    
    setTimeout(res.redirect('/about-page'), 50000)
}

const terms_get = (req,res) => {
    Meta.findOne({
        where: {
            id: 2
        }
    }).then(result => {
        res.render('meta-terms', {auth: req.session.user, data: result.value})
    })
}

const terms_post = (req,res) => {
    
    Meta.update({ value: req.body.value }, {
        where: {
          id: 2
        }
      })
    
    setTimeout(res.redirect('/terms-page'), 50000)
}

const privacy_get = (req,res) => {
    Meta.findOne({
        where: {
            id: 3
        }
    }).then(result => {
        res.render('meta-privacy', {auth: req.session.user, data: result.value})
    })
}

const privacy_post = (req,res) => {
    
    Meta.update({ value: req.body.value }, {
        where: {
          id: 3
        }
      })
    
    setTimeout(res.redirect('/privacy-page'), 50000)
}

const contact_get = (req,res) => {
    Meta.findAll().then(result => {
        res.render('meta-contact', {auth: req.session.user, mail: result[3].value, address: result[4].value, phone: result[5].value})
    })
}

const contact_post = (req,res) => {
    Meta.update({ value: req.body.mail}, {
        where: {
            id: 4
        }
    })

    Meta.update({ value: req.body.address}, {
        where: {
            id: 5
        }
    })

    Meta.update({ value: req.body.phone}, {
        where: {
            id: 6
        }
    })

    res.redirect('/contact-page')
}

const site_get = (req,res) => {
   
    Meta.findAll().then(result => {
        res.render('meta-site', {auth: req.session.data, hostname: result[6].value, description: result[7].value})
    })

}

const site_post = (req,res) => {
    
    Meta.update({value: req.body.head}, {
        where: {
            id: 7
        }
    })

    Meta.update({value: req.body.desc}, {
        where: {
            id: 8
        }
    })

    res.redirect('/site-page')
}

module.exports = {
    about_get,
    about_post,
    terms_get,
    terms_post,
    privacy_get,
    privacy_post,
    contact_get,
    contact_post,
    site_get,
    site_post
}