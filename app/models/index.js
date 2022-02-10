const dbConfig = require('../config/db.config')

const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize(dbConfig);

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

db.contatos = require('./contato.model')(sequelize, Sequelize)

module.exports = db