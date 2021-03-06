//REQUIRE EXPRESS and CREATE A ROUTER
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//IMPORT THE MODELS
var db = require ('../models');

//CREATE ROUTES - for each applicable http method and path - associate the request with a mysql transaction and associate the response with a display using handlebars with html
//NOTE: The get route looks up all burgers, assembles the data returned in a handlebars object, and responds using the render method on results and passing in the handlebars object
router.get('/', function(req,res){
    db.Burger.findAll().then(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log('Controller says the handlebars object is: '+ hbsObject);
        res.render('index', hbsObject);
    });
});
    
//NOTE: The post route adds a burger to the database using the Create method on the Burger model
router.post("/", function(req, res) {
    // Create a variable to hold the request body
    var burger = req.body;
    // Add the burger to the database using sequelize
    db.Burger.create({
      burger_name: burger.burger_name,
      devoured: burger.devoured
    }).then(function(result){
        res.redirect('/');
    });
});

//NOTE: The update route changes the devoured status of the burger, using the id and the params method to locate the row and the body method to update with a new value
router.put("/:id", function(req, res){
    var dinner = req.body;
    //var condition = "id = " + req.params.id;
    db.Burger.update(
        {
            devoured: dinner.devoured
        },{
            where: {id: req.params.id}
        }).then(function(result) {
            res.redirect('/');
        });
});


//EXPORT THE ROUTER
module.exports = router;