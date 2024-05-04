import { connection } from "../lib/db.js";

class BlogsController {
    //get all user
getAll(req, res){
    connection.query(
      "SELECT * FROM users ORDER BY id desc",
      function (err, rows) {
        if (err) {
          res.status(200).json({
            message: "Sorry no users found",
            data: { data: "" },
            sucess: true,
          });
        } else {
          res.status(200).json({
            message: "All users fetched successfully",
            data: { data: rows },
            sucess: true,
          });
        }
      }
    );
  }
  
  //add user
addUser(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let position = req.body.position;
    let errors = false;
  
    if (name.length === 0 || email.length === 0 || position === 0) {
      errors = true;
      res.status(422).json({
        message: "Please enter name and email and position",
        sucess: false,
      });
    }
    if (!errors) {
      var userData = {
        name: name,
        email: email,
        position: position,
      };
  
      connection.query(
        "INSERT INTO users SET ?",
        userData,
        function (err, result) {
          if (err) {
            res.status(400).json({
              message: "Sorry there was an error",
              error: err,
              sucess: false,
            });
          } else {
            res.status(201).json({
              message: "User successfully added",
              data: result,
              sucess: true,
            });
          }
        }
      );
    }
  };
  
  //get single user
getSingleUser (req, res){
    let id = req.params.id;
  
    connection.query(
      "SELECT * FROM users WHERE id = " + id,
      function (err, rows, fields) {
        if (err) throw err;
  
        if (rows.length <= 0) {
          res.status(200).json({
            message: "User not found",
            data: fields,
            sucess: true,
          });
        } else {
          res.status(200).json({
            message: "User details pulled successfully",
            data: rows,
            sucess: true,
          });
        }
      }
    );
  };
  
  //update user
updateUser(req, res) {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let position = req.body.position;
    let errors = false;
  
    if (name.length === 0 || email.length === 0 || position.length === 0) {
      errors = true;
      res.status(422).json({
        message: "Please enter name and email and position",
        error: err,
        sucess: false,
      });
    }
  
    if (!errors) {
      var userData = {
        name: name,
        email: email,
        position: position,
      };
      connection.query(
        "UPDATE users SET ? WHERE id = " + id,
        userData,
        function (err, result) {
          if (err) {
            res.status(400).json({
              message: "Sorry there was an error",
              error: err,
              sucess: false,
            });
          } else {
            res.status(200).json({
              message: "User successfully updated",
              data: result,
              sucess: true,
            });
          }
        }
      );
    }
  };
  
  //delete user
deleteUser(req, res) {
    let id = req.params.id;
    connection.query(
      "DELETE FROM users WHERE id = " + id,
      function (err, result) {
        if (err) {
          res.status(400).json({
            message: "Sorry there was an error",
            error: err,
            sucess: false,
          });
        } else {
          res.status(200).json({
            message: "User successfully deleted! ",
            data: result,
            sucess: true,
          });
        }
      }
    );
  }
}

export default BlogsController

