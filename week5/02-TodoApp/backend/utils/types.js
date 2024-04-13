import zod from "zod";

// const title = zod.string();
// const description = zod.string();
// const id = zod.string();

const createTodo = zod.objectUtil({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.objectUtil({
  id: zod.string(),
});

export { createTodo, updateTodo };
