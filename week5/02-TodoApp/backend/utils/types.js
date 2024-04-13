import zod from "zod";

// const title = zod.string();
// const description = zod.string();
// const id = zod.string();

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

export { createTodo, updateTodo };
