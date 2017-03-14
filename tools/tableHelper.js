var Sequelize = require('sequelize')
var dbStorage = require('../db/db.js');

//创建hero表
var Hero = dbStorage.define('Hero',{
	id: Sequelize.STRING,
	desc: Sequelize.STRING
})

