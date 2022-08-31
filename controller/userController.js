const User = require('../model/userModel')
const bodyParser = require('body-parser')

var randtoken = require('rand-token').generator({
    chars: '0-9',
  })


const new_user = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {
    let uname = req.body.name
    let umail = req.body.mail
    let upass = req.body.pass
    let urpass = req.body.rpass

    if(upass == urpass ) {

    User.findOne({
        where: {
            mail : umail
        }
    }).then(usercheck => {
        if(usercheck == null) {
            
        User.create({
            uid: randtoken.generate(8),
            name: uname,
            mail: umail,
            pass: upass
        })

        res.render('panel-adduser', {msg: 'Kullanıcı Başarıyla Oluşturuldu!', auth: req.session.user})

        } else {
            res.render('panel-adduser', {err: 'E-posta kullanımda!', auth: req.session.user})
        }
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error)
    })

    } else {
        res.render('panel-adduser', {err: 'Şifre ve şifre tekrar uyuşmuyor', auth: req.session.user})
    }
 }
}

const list_user = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    User.findAll().then(result => {
        res.render('panel-listuser', {data: result, auth: req.session.user})
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error)
    })

  }
}

const delete_user = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    let get_uid = req.query.uid

    User.destroy({
        where: {
          uid: get_uid
        }
    }).then(() => {
        res.redirect('/list-user')
    }).catch((error) => {
        console.error('Failed to delete record : ', error)
    })
  }
}

const get_edit_user = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    let get_uid = req.query.uid

    User.findOne({
        where: {
            uid : get_uid
        }
    }).then(result => {
        res.render('panel-edituser', {data: result, auth: req.session.user})
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error)
    })

  }

}

const post_edit_user = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    let fuid = req.body.uid
    let fname = req.body.name
    let fmail = req.body.mail
    let fpass = req.body.pass
    let frpass = req.body.rpass

    if(fpass == frpass) {

        if(fpass == '') {

            User.update({ name: fname, mail: fmail }, {
                where: {
                  uid: fuid
                }
              }).then(result => {
                console.log(result)
              })

              res.redirect('list-user')

        } else {

            User.update({ name: fname, mail: fmail, pass: fpass }, {
                where: {
                  uid: fuid
                }
              }).then(result => {
                console.log(result)
              })

              res.redirect('list-user')
        }
    } else {
        res.send('Şifre ve şifre tekrar uyuşmuyor!')
    }
  }
}

module.exports = {
    new_user,
    list_user,
    delete_user,
    get_edit_user,
    post_edit_user
}