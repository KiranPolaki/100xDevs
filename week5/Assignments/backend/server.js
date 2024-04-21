import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { Card } from "./db/db.js";

const app = express();

// * Middlewares
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const cardsData = Card.find();
  res.status(201).json({
    cardsData,
  });
});

app.post("/card", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const linkedin = req.body.linkedin;
  const twitter = req.body.twitter;
  const github = req.body.github;
  const interests = req.body.interests;
  // ! Validations must be done

  await Card.create({
    name,
    description,
    linkedin,
    twitter,
    github,
    interests,
  });

  res.status(200).json({
    message: "Entry to the data base is made",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at PORT http://localhost:${PORT}`);
});

export { app };
