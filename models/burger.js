var orm = require("../config/orm.js");

//Calling the orms functions with specific data//
var burger = {
  selectAll: function(edb) {
    orm.selectAll('burgers', function(res) {
      edb(res);
    });
  },
  insertOne: function(name, edb) {
    orm.insertOne('burgers', [
      'burger_name', 'devoured'
    ], [
      name, false
    ], edb);
  },
  updateOne: function(id, edb) {
    var burgerid = 'id=' + id;
    orm.updateOne('burgers', {
      devoured: true
    }, burgerid, edb);
  }
};

module.exports = burger;
