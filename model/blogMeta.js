const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require('./config')

const Meta = sequelize.define("blog_meta", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },

    value: {
        type: DataTypes.TEXT,
        defaultValue: null,
    }
})

module.exports = Meta