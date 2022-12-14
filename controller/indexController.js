const User = require("../model/userModel")
const Articles = require('../model/articlesModel')
const Category = require('../model/categoryModel')
const Meta = require('../model/blogMeta')
const Contact = require('../model/contactModel')

const install = (req, res) => {

        User.sequelize.sync().then(() => {
            console.log("Kullanıcı tablosu oluşturuldu!")
            User.create({uid: "12345678", name: "admin", mail: "admin@example", pass: "admin"}).then(() => {
                console.log("Ön tanımlı kullanıcı oluşturuldu!")
            })
        })

        Articles.sequelize.sync().then(() => {
            console.log("Makale tablosu oluşturuldu!")
        })
        Category.sequelize.sync().then(() => {
            console.log("Kategori tablosu oluşturuldu!")
        })
        Contact.sequelize.sync().then(() => {
            console.log("İletişim Tablosu Oluşturuldu!")
        })
        Meta.sequelize.sync().then(() => {
            console.log("Meta tablosu oluşturuldu!")
            Meta.create({id: '1'})
            Meta.create({id: '2'})
            Meta.create({id: '3'})
            Meta.create({id: '4'})
            Meta.create({id: '5'})
            Meta.create({id: '6'})
            Meta.create({id: '7'})
            Meta.create({id: '8'})
        })

        res.redirect('/login')
        
    }

const default_user = (req,res) => {

        User.create({uid: "12345678", name: "admin", mail: "admin@example", pass: "admin"}).then(() => {
            console.log("Ön tanımlı kullanıcı oluşturuldu!")
        })

        res.redirect('/login')
}


const admin_get = (req, res) => {
    
        Contact.findAll({
            where: {
                state: 0
            }
        }).then(result => {
            Articles.findAll().then(result1 => {
                Category.findAll().then(result2 => {
                    User.findAll().then(result3 => {
                        res.render('panel-index', { auth: req.session.user, tmessage: result, tpost: result1, tcategory: result2, tuser: result3 })
                    })
                })
            })
    
        })
}

const add_user = (req, res) => {
    
        res.render('panel-adduser', { auth: req.session.user })
    
}

const get_login = (req, res) => {
    
        res.render('login')
    
}

const post_login = (req, res) => {
    User.findAll({
        where: {
            mail: req.body.mail
        }
    }).then(result => {
        if (result == '') {
            res.render('login', { err: 'Kullanıcı adı veya şifre hatalı' })
        } else {
            if (req.body.password == result[0].pass) {
                req.session.status = '1'
                req.session.user = result[0].name
                res.redirect('/mypanel')
            } else {
                res.render('login', { err: 'Kullanıcı adı veya şifre hatalı' })
            }
        }
    })
}

const logout = (req, res) => {

        req.session.destroy();
        res.redirect('/login')
}

module.exports = {
    admin_get,
    add_user,
    get_login,
    post_login,
    logout,
    install,
    default_user
}