const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize(
   'node_test',
   'root',
   '',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  )

  module.exports = sequelize