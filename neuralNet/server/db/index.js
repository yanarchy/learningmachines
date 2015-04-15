var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'learningMachines'
});

module.exports = dbConnection;
