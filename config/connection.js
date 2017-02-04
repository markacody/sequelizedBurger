//REQUIRE MySQL NODE PACKAGE
var Sequelize = require('sequelize');
var mysql = require("mysql");

//DEFINE CONNECTION
var connection; 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
    connection = new Sequelize('burgers_db', 'root','');
};

//EXPORT CONNECTION
module.exports = connection;