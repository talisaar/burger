// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "mg5mq87repqigbmn",
  password: "yrx3hyikskr0htdb",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
