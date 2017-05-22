var express = require("express");
var methodOverride = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3306;

//Using Body Parser to parse the data into readable formats//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

//Requiring and setting Handlebars//
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Using the static directory to hold all assets//
app.use(express.static("app/public"));

//Requiring the routes in the burgers controller file//
var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);
// Server is listening//
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
