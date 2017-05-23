var Sequelize = require("sequelize");
var sequelize = require("..config/connection.js")
//Calling the orms functions with specific data//
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

burger.sync();
