const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('./config')

const Contact = sequelize.define("contact", {
    name: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      unique: true
    },
    message: {
      type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
      }
 })

 module.exports = Contact