const Articles = require('../model/articlesModel')
const Meta = require('../model/blogMeta')
const Category = require('../model/categoryModel')

const all_articles = (req, res) => {

    if (req.query._start) {

        Articles.findAll({ offset: +req.query._start, limit: +req.query._limit }).then(result => {
            res.send(result)
        })

    } else {
        Articles.findAll().then(result => {
            res.send(result)
        })
    }
}

const select_articles = (req, res) => {

    Articles.findOne({
        where: {
            link: req.query.link
        }
    }).then(result => {
        Articles.update({ read: +result.read + 1 }, {
            where: {
              id: result.id
            }
          })
        res.send(result)
    })
}


const all_category = (req, res) => {
    Category.findAll().then(result => {
        res.send(result)
    })
}

const select_category = (req, res) => {

    Articles.findAll({
        where: {
            category: +req.query.id
        }
    }).then(result => {
        res.send(result)
    })
}

const higlight_post = (req,res) => {

    Articles.findAll({
        limit: 1,
        order: [
            ['read', 'DESC'],
        ]
    }).then(result => {
        res.send(result)
    })

}

const about_meta = (req,res) => {

    Meta.findAll({
        where: {
            id: +req.query.id
        }
    }).then(result => {
        res.send(result)
    })

}


module.exports = {
    all_articles,
    select_articles,
    all_category,
    select_category,
    higlight_post,
    about_meta,
}
