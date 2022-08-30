const Category = require("../model/categoryModel")
const Articles = require("../model/articlesModel")

const create_category_table = (req,res) => {
    
    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Category.sequelize.sync().then(() => {
        console.log('Book table created successfully!')
        res.redirect('/mypanel')
     }).catch((error) => {
        console.error('Unable to create table : ', error)
     })
   }
}

const new_category = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Category.create({
        name: req.body.name
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error)
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
        Category.update({ name: req.body.name }, {
            where: {
                id: req.body.id
            }
        })
    }

    res.redirect('/list-category')
    }
}

module.exports = {
    create_category_table,
    new_category,
    list_category,
    func_category
}