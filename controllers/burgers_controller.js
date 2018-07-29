var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.getBurgers(function(result) {
        res.render("index", {burgers: result});
    })
})

router.post("/api/burgers", function(req, res) {

    var burgerName = req.body.burgerName;
    console.log(burgerName);

    burgers.makeABurger(burgerName, function(result) {
        console.log("A burger was added!");
        res.json(result);
    })
});

router.put("/api/burgers", function(req, res) {
    burgers.eatABurger(req.body.id)
})

module.exports = router;