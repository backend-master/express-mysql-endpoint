require("dotenv").config();

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

module.exports = db;
