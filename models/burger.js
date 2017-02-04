//build sequelized model of the database tables here.
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burgers", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
}
);

// Syncs with DB
Burger.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Burger;
