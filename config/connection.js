const mysql = require("mysql");
let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "hsryuxpnt29rgn3u",
    password: "z009061zlsdrzmh6",
    database: "mf7boqn3vubbw3ja",
  });
  }

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
