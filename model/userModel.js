const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('./config')

const User = sequelize.define("users", {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      unique: true
    },
    pass: {
      type: DataTypes.STRING,
    }
 })

 module.exports = User