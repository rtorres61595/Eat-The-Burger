const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) throw err });

    module.export = connection;