var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_janzeng',
  password        : '5069',
  database        : 'cs340_janzeng'
});

module.exports.pool = pool;
