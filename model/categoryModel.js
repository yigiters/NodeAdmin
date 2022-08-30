const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('./config')

const Category = sequelize.define("category", {
    
    name: {
      type: DataTypes.TEXT,
    }
 })

 module.exports = Category