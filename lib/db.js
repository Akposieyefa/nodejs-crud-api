import mysql from "mysql";
import dotenv  from "dotenv"

dotenv.config();

export var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully..!!");
  }
});
