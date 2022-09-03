const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.listen('3001')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
const session = require('express-session')
app.use(session({
    secret: 'salman',
    resave: false,
    saveUninitialized: true
  }))
const indexRoute = require('./routes/indexRoute')
const userRoute = require('./routes/userRoute')
const articleRoute = require('./routes/articleRoute')
const apiRoute = require('./routes/apiRoute')
const categoryRoute = require('./routes/categoryRoute')
const metaRoute = require('./routes/metaRoute')


app.use(indexRoute)
app.use(userRoute)
app.use(articleRoute)
app.use(apiRoute)
app.use(categoryRoute)
app.use(metaRoute)