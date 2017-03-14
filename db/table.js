const Sequelize = require('sequelize')
const dbStorage = require('./db.js');

//定义表结构
const User = dbStorage.define('User',{
	username: Sequelize.STRING,
	password: Sequelize.STRING
})

//创建表结构,并插入数据
dbStorage.sync()
    .then(function () {
        //用sequelize创建我们第一个用户
        return Test.create({
            username : '222222',
            password : '123456'
        }).done(function (err, result){
                console.log(err)
                console.log(result)
            })
    }).error(function (err){
        console.log(err);
    })