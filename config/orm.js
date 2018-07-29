var connection = require("./connection.js");

module.exports = {

    selectAll(table, cb) {
        var query = `SELECT * FROM ${table}`;
        connection.query(query, function(err, res) {
            console.log("this as hit")
            if (err) throw (err);
            cb(res);
        })
    },

    insertOne(table, cols, vals, cb) {
        var query = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`
        connection.query(query,function(err, res) {
            if (err) throw (err);
            console.log("add a burger");
            cb(res);
        })
    },

    updateOne(table, id) {
        var query = `UPDATE ${table} SET devoured=true  WHERE id=${id}`;
        connection.query(query, function(err, res) {
            if (err) throw (err);
            console.log("Burger Devoured!")
        })
    }
}