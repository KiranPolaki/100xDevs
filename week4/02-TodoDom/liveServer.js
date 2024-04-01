const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const todos = [
  {
    id: 1,
    todo: "Sleep",
    Desctiption: "4hours/6hours",
  },
  {
    id: 2,
    todo: "Wake",
    Desctiption: "rest of the day",
  },
  {
    id: 3,
    todo: "Eat",
    Desctiption: "Three times a day",
  },
  {
    id: 4,
    todo: "Whatever",
    Desctiption: "rest of the day",
  },
  {
    id: 5,
    todo: "Just filling the gaps",
    Desctiption: "rest of the day",
  },
  {
    id: 6,
    todo: "Watch premalu",
    Desctiption: "rest of the day",
  },
  {
    id: 7,
    todo: "Drink water",
    Desctiption: "rest of the day",
  },
  {
    id: 8,
    todo: "Eat Healthy",
    Desctiption: "rest of the day",
  },
];

app.get("/randomTodos", (req, res) => {
  const randomCount = Math.floor(Math.random() * todos.length);
  let newTodo = [];
  for (let i = 0; i < randomCount; i++) {
    let randomTodo = Math.floor(Math.random() * todos.length);
    newTodo[i] = todos[randomTodo];
  }
  res.send(newTodo);
});

app.listen(8080, () => {
  console.log("Listening at port 8080");
});
