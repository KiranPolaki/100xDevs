import express from "express";
import { PORT } from "./config.js";
import { createTodo, updateTodo } from "./utils/types.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Go to /todos to get all the todos",
  });
});

app.post("/todo", (req, res) => {
  res.status(200).json();
});

app.get("/todos", (req, res) => {
  res.json("Template");
});

app.put("/completed", (req, res) => {
  res.json();
});

app.listen(PORT, () => {
  console.log(`Listening at PORT http://localhost:${PORT}`);
});
