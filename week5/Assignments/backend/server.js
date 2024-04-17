import express from "express";

import { PORT } from "./config.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "whatever",
  });
});

app.listen(PORT || 3000, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
