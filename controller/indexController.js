const User = require("../model/userModel")

const admin_get = (req,res) => {
    if(req.session.status != '1') {
        res.redirect('/login')
    } else {
    res.render('panel-index', {auth: req.session.user})
    }
}

const add_user = (req,res) => {
    if(req.session.status != '1') {
        res.redirect('/login')
    } else {
    res.render('panel-adduser', {auth: req.session.user})
    }
}

const get_login = (req,res) => {
    if(req.session.status == 1) {
        res.redirect('mypanel')
    } else {
    res.render('login')
    }
}

const post_login = (req,res) => {
    User.findAll({
        where: {
            mail: req.body.mail
        }
    }).then(result => {
        if(result == '') {
            res.render('login', {err: 'Kullanıcı adı veya şifre hatalı'})
        } else {
            if(req.body.password == result[0].pass) {
                req.session.status = '1'
                req.session.user = result[0].name
                res.redirect('/mypanel')
            } else {
                res.render('login', {err: 'Kullanıcı adı veya şifre hatalı'})
            }
        }
    })
}

const logout = (req,res) => {
    
    if(req.session.status != '1') {
        res.redirect('/login')
    } else {
    
        req.session.destroy();
        res.redirect('/login')

    }
}

module.exports = {
    admin_get,
    add_user,
    get_login,
    post_login,
    logout,
}