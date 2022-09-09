const isLogin = (req,res,next) => {
    if(req.session.status == 1) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = isLogin