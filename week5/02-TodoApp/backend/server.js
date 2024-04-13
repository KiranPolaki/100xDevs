import express from "express";
import { PORT } from "./config.js";
import { createTodo, updateTodo } from "./utils/types.js";

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayload);
  if (!parsedPayLoad) {
    res.status(403).json("Invalid inputs");
    return;
  }
  res.status(200).json();
});

app.get("/todos", (req, res) => {
  res.json("Template");
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayload);
  if (!parsedPayLoad) {
    res.status(403).json("Invalid inputs");
    return;
  }
  res.status(200).json();
});

app.get("/", (req, res) => {
  res.json({
    msg: "Go to /todos to get all the todos",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at PORT http://localhost:${PORT}`);
});
