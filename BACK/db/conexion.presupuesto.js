const Sequelize = require('sequelize');


const sequelize = new Sequelize('presupuestosdb',process.env.DB_USR,process.env.DB_PASS,{
  dialect: 'mssql',
  server: process.env.DB_HOST,
  port: process.env.DB_PORT
})

module.exports = sequelize ;