const Category = require("../model/categoryModel")
const Articles = require("../model/articlesModel")

const new_category = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Category.create({
        name: req.body.name,
        image: req.body.image
    }).then(res => {
        console.log(res)
    })

    res.redirect('/list-category')
    }
}

const list_category = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Category.findAll().then(result => {
        res.render('panel-listcategory', {data: result, auth: req.session.user})
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error)
    })
    }
}

const func_category = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {
    
    if(req.body.func == 'delete') {
        
        Articles.findAll({
            where: {
                category: req.body.id
            }
        }).then(result => {
            if(result.length > '0') {
                console.log('Gönderi Var Silinemez')
            } else {
                Category.destroy({
                    where: {
                        id: req.body.id
                    }
                })
            }
        })
    }

    if(req.body.func == 'update') {
        Category.update({ name: req.body.name, image: req.body.image }, {
            where: {
                id: req.body.id
            }
        })
    }

    res.redirect('/list-category')
    }
}

module.exports = {
    new_category,
    list_category,
    func_category
}