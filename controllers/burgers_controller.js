var express = require("express");

var router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.getBurgers(function(res) {
        var non_eaten = [];
        var eaten = [];

        res.forEach(function(burger) {
            if (buger.devoured) {
                eaten.push(burger)
            } else {
                non_eaten.push(burger);
            }
        })

        res.render("index", {ready_burger: non_eaten, eaten_burger: eaten});
    })
})

router.post("/api/burgers", function(req, res) {
    var burgerName = req.body.burgerName;

    burgers.makeABurger(burgerName, function(res) {
        console.log("new Burger added!");
    })
});

router.put("/api/burgers", function(req, res) {
    burgers.eatABurger(function(res) {
        console.log("a Burger was devoured!");
    })
})