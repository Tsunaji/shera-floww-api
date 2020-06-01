const Sequelize = require('sequelize')
const config = require('../config/config')

const sequelize = new Sequelize(config.MSSQL_DATABASE, config.MSSQL_USER, config.MSSQL_PASSWORD, {
    host: config.MSSQL_HOST,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1,
            trustServerCertificate: false,
            encrypt: true
        }
    },
    define: {
        schema: "MDL"
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.saleOrder = require("./saleOrder.model.js")(sequelize, Sequelize);
db.saleOrder.removeAttribute('id'); //no primary key

module.exports = db;