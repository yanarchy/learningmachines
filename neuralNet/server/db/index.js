var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
<<<<<<< HEAD
  password: 'root',
=======
>>>>>>> 13a7391e5c2a295f0c05476e0a6f87dcf3158339
  database: 'learningMachines'
});

module.exports = dbConnection;
