//REQUIRE EXPRESS and CREATE A ROUTER
var express = require('express');
var router = express.Router();

//IMPORT THE MODEL
var Burger = require('../models/burger.js');

//CREATE ROUTES - for each applicable http method and path - associate the request with a mysql transaction and associate the response with a display using handlebars with html
//NOTE: The get route looks up all burgers, assembles the data returned in a handlebars object, and responds using the render method on results and passing in the handlebars object
router.get('/', function(req,res){
    Burger.findAll().then(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log('Controller says the handlebars object is: '+ hbsObject);
        res.render('index', hbsObject);
    });
});
    
    
//NOTE: The post route adds a burger, passing column names as an array and creating a matching array of values by parsing the incoming data with the body method. This route responds with a redirect to the index page whereupon selectAll is run again on arrival
//router.post("/");
//NOTE: The put route updates the devoured status of the burger, using the id and the params method to locate the row and the body method to update with a new value
//router.put("/:id");
    //NOTE: invoke the function, specify the column and new value in an object literal, then specify the id of the row to be updated with the variable declared and assigned above, devoured. In a callback function redirect to the index whereupon the select all function is run again.
  //  burger.updateOne({});
//});

//EXPORT THE ROUTER
module.exports = router;