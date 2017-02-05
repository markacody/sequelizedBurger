var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var handlebars = require('express-handlebars');

//CREATE SERVER OBJECT and ASSIGN PORT
var app = express();

var PORT = process.env.PORT || 8080;

//MIDDLEWARE - intercept incoming data for parsing
//Serve static files from the public directory
app.use(express.static(process.cwd() + "/public"));

//Parse data posted from a form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(methodOverride('_method'));

//Announce the use of handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTES - required routes to api and html
var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

//START APP SERVER and bind to the port number and to the database
var db = require("./models");
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
