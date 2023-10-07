const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "user",
  user: "root",
  password: "",
});

connection.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected to Database");
});

module.exports = { connection };
