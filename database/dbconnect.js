var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "desutsche_challenge"
});

conn.connect((err)=>{
  if(err)
      throw new Error(err)
})

module.exports = conn

