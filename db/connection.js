const mysql = require("mysql");
const util = require("util")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mead0w!1", // NEED TO ADD
    database: "employee_tracker_db"
});

connection.connect(err => {
    if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;