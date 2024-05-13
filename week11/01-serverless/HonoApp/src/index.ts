import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Whatever");
});

app.post("/", async (c) => {
  const body = await c.req.json();
  const header = c.req.header("Authorization");
  const query = c.req.query("param");
  return c.json({ message: "Hello Hono!", body, header, query });
});

export default app;
