var express = require("express");
var app = express();
var router = express.Router();
var burger = require("../models/burger.js");
//Routes for getting, creating and updating the Burger Object//

// orms.selectAll("*", "burgers");
// orms.insertOne(4, "Philly Cheesesteak Burger", true);
// orms.updateOne("burgers", "burger_name", "Veggie Burger", "id", 2);


router.get("/", function(req, res) {
    res.redirect('/burgers')
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data){
      var burgerObjectOne = {
        burgers: data
      }
      console.log(burgerObjectOne);
      res.render("index", burgerObjectOne);
    });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(['burger_name'], [req.body.burger_name], function(data){
		res.redirect('/burgers')
	});
});

router.put("/burgers/update/:id", function(req,res) {
    var burgerid = 'id = ' + req.params.id;
  	console.log('burger id ', burgerid);
  	burger.updateOne({'devoured': req.body.devoured}, burgerid, function(data){
  		res.redirect('/burgers');
  	});
});

module.exports = router;
