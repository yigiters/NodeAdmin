const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('./config')

const Contact = sequelize.define("contact", {
    name: {
      type: DataTypes.TEXT,
    },
    mail: {
      type: DataTypes.TEXT,
      unique: true
    },
    message: {
      type: DataTypes.TEXT,
    },
    state: {
        type: DataTypes.STRING,
      }
 })

 module.exports = Contact