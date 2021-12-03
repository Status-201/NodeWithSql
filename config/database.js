const mysql = require("mysql");

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs",
});

module.exports = conn;
