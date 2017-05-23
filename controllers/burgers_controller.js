var express = require("express");
var app = express();
var router = express.Router();
var burger = require("../models/burger.js");
//Routes for getting, creating and updating the Burger Object//

router.get("/", function(req, res) {
    res.redirect('/burgers')
});

router.get("/burgers", function(req, res) {
  db.burger.findAll().then(function(burgers){
    console.log(burgers);
  });
    res.render("index", burgers);
  });
});

router.post("/burgers/create", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(results){
    res.redirect('/burgers');
    })
	});
});

router.put("/burgers/update/:id", function(req,res) {
    var burgerid = 'id = ' + req.params.id;
    db.burger.update(burgers, {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      id: burgerid
    }).then(function(burgers){
      console.log(burgers);
  		res.redirect('/burgers');
  	});
});

module.exports = router;
