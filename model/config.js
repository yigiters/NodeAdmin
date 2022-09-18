const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize(
   'processs.env.DB_NAME',
   'process.env.USER',
   'process.env.PASS',
    {
      host: 'process.env.HOSTNAME',
      dialect: 'mysql'
    }
  )

  module.exports = sequelize
