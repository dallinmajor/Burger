var connection = require("./connection.js");

function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

module.exports = {

    selectAll(table,cb) {
        var query = `SELECT * FROM ${table}`;

        connection.query(query, function(err, res) {
            if (err) throw (err);
            cb(res);
        })
    },

    insertOne(table, cols, vals,cb) {
        var query = `INSERT INTO ${table} (${cols.toString()})
VALUES (${questionMarks(vals.length)})`;

        connection.query(query, vals, function(err, res) {
            if (err) throw(err);
        })

        cb(res)
    },

    updateOne(id, val, cb) {
        var query = `UPDATE burgers SET devoured = ${val}  WHERE id=${id}`;

        connection.query(query, function(err, res) {
            cb(res);
        })
    }
}