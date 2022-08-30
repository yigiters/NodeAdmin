const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('./config')

const Articles = sequelize.define("articles", {
    
    title: {
      type: DataTypes.TEXT,
    },
    subtitle: {
      type: DataTypes.TEXT,
    },
    text: {
       type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
    read: {
        type: DataTypes.STRING,
        defaultValue: "0"
    },
    link: {
        type: DataTypes.STRING,
        unique: true
    },
    writer: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.TEXT,
    },
    keywords: {
      type: DataTypes.TEXT,
    }
 })

 module.exports = Articles