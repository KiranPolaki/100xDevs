import express from "express";
import { PORT } from "./config.js";
import { createTodo, updateTodo } from "./utils/types.js";
import { Todos } from "./db/db.js";

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayload);
  if (!parsedPayLoad) {
    res.status(403).json("Invalid inputs");
    return;
  }
  // ! Handle Exceptions (DIY) ("GlobalCatch" or "try catch")
  await Todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.status(200).json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  // * incase we are fetching for a specific user then we pull there todos by mathcing id/username
  const allTodos = await Todos.find({});
  res.json({ allTodos: allTodos });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayload);
  if (!parsedPayLoad) {
    res.status(403).json("Invalid inputs");
    return;
  }

  await Todos.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.status(200).json({
    msg: "Todo is completed and updated",
  });
});

app.get("/", (req, res) => {
  res.json({
    msg: "Go to /todos to get all the todos",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at PORT http://localhost:${PORT}`);
});
