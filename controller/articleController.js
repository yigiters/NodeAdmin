const Articles = require('../model/articlesModel')
const Category = require('../model/categoryModel')
const slugify = require('slugify') /* slugify('some string', '_') */

const get_new_article = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Category.findAll().then(result=> {
        res.render('panel-newpost', {data: result, auth: req.session.user})
    }).catch((error=> 
        console.error(error)    
    ))
    }
}

const post_new_article = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    ftitle = req.body.title
    fsubtitle = req.body.subtitle
    ftext = req.body.text
    fimage = req.body.image
    fcategory = req.body.category

    if(req.body.link == ""){
        flink = slugify(ftitle, {replacment: '-', lower: true, trim: true  })
    } else {
        flink = req.body.link
    }
    fkeywords = req.body.keywords
    
    Articles.create({
        title: ftitle.trim(),
        subtitle: fsubtitle.trim(),
        text: ftext.trim(),
        image: fimage.trim(),
        link: flink.trim(),
        keywords: fkeywords.trim(),
        category: fcategory.trim(),
        writer: req.session.user.trim()
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error)
    })
    res.redirect('new-post')
    }
}

const get_list_article = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Articles.findAll().then(result => {
        res.render('panel-listpost', {data: result, auth: req.session.user})
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error)
    })
    }
}

const delete_article = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    gid = req.query.id

    Articles.destroy({
        where: {
          id: gid
        }
    }).then(() => {
        console.log("Successfully deleted record.")
    }).catch((error) => {
        console.error('Failed to delete record : ', error)
    })

    res.redirect('list-post')
    }
}

const get_edit_article = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    let gid = req.query.id

    Articles.findOne({
        where: {
            id : gid
        }
    }).then(result => {
    
    Category.findAll().then(result1=> {

        Category.findOne({
            where: {
                id: result.category
            }
        }).then(result2 => {
            res.render('panel-editpost', {data: result, data1: result1, data2: result2, auth: req.session.user})
        })    
    })
  })
  }
}

const post_edit_article = (req,res) => {

    if(req.session.status != '1') {
        res.redirect('/login')
    } else {

    Articles.update({ title: req.body.title.trim(), subtitle: req.body.subtitle.trim(), text: req.body.text.trim(), image: req.body.image.trim(), link: req.body.link.trim(), keywords: req.body.keywords.trim(), writer: req.body.writer.trim(), category: req.body.category.trim() }, {
        where: {
            id: req.body.id
        }
      })
      res.redirect('/list-post')
    }
}

module.exports = {
    get_new_article,
    post_new_article,
    get_list_article,
    delete_article,
    get_edit_article,
    post_edit_article
}