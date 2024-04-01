const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

const authSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
  country: zod.literal("IN").or(zod.literal("US")),
  userNames: zod.array(zod.string()),
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("dude comon send a post request to this");
});

app.post("/", (req, res) => {
  const userNames = req.body;
  const response = authSchema.safeParse(userNames);
  if (!response.success) {
    res.json(response);
  }
  res.send(response);
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});

//res.json(`Length of the userNames array is ${userNames.length}`);
// res.json(
//   `Expected ${response.error.issues[0].expected} but got ${response.error.issues[0].received}`
// );
