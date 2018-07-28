var orm = require("../config/orm.js");

module.exports = {
    getBurgers(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    makeABurger(name, cb) {
        orm.insertOne("burgers", "burger_name", name, function(res) {
            cb(res);
        } )
    },

    eatABurger(id, cb) {
        orm.updateOne(id, true, function(res) {
            cb(res);
        })
    }
}