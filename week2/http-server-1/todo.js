//require the express module
var express = require("express");

//create a new express app
var app = express();

//require the body-parser module
var bodyParser = require("body-parser");

//use the body-parser middleware to parse JSON data
app.use(bodyParser.json());

//create an array to store the todos
var todos = [];

//create a GET route to retrieve all the todos
app.get("/todos", function (req, res) {
  //send the todos array as a JSON response
  res.json(todos);
});

//create a POST route to add a new todo
app.post("/todos", function (req, res) {
  //get the todo object from the request body
  var todo = req.body;

  //add the todo to the todos array
  todos.push(todo);

  //send a success message as a JSON response
  res.json({ message: "Todo added successfully" });
});

//create a PUT route to update an existing todo
app.put("/todos/:id", function (req, res) {
  //get the todo id from the request params
  var id = req.params.id;

  //get the updated todo object from the request body
  var updatedTodo = req.body;

  //loop through the todos array
  for (var i = 0; i < todos.length; i++) {
    //find the todo with the matching id
    if (todos[i].id == id) {
      //update the todo with the new values
      todos[i] = updatedTodo;
      //send a success message as a JSON response
      res.json({ message: "Todo updated successfully" });
      //exit the loop
      break;
    }
  }
});

//create a DELETE route to delete an existing todo
app.delete("/todos/:id", function (req, res) {
  //get the todo id from the request params
  var id = req.params.id;

  //loop through the todos array
  for (var i = 0; i < todos.length; i++) {
    //find the todo with the matching id
    if (todos[i].id == id) {
      //remove the todo from the todos array
      todos.splice(i, 1);
      //send a success message as a JSON response
      res.json({ message: "Todo deleted successfully" });
      //exit the loop
      break;
    }
  }
});

//start the server on port 3000
app.listen(3000, function () {
  console.log("Todo app listening on port 3000");
});
