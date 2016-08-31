const Sequelize = require('sequelize');
const config = require('../config/config.json');

var dbStorage = new Sequelize(config.db_infor.db_name, config.db_infor.username, config.db_infor.password, {
	dialect: "mysql",
	host: config.db_infor.host,
	port: 3306,
	pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	}
});

dbStroage.authenticate().complete(function(err) {
    if (!!err) {
      	console.log('Unable to connect to the database:', err)
    } else {
      	console.log('Connection has been established successfully.')
    }
});

module.exports = dbStorage;