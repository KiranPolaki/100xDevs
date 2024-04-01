const express = require("express");

const app = express();

app.use(express.json());

let count = 0;

function counter(req, res, next) {
  count++;
  next();
}

//custom middleware
app.use(counter);

app.get("/", (req, res) => {
  res.status(200).json({ msg: `We are getting something at / ${count}` });
});

app.post("/user", (req, res) => {
  const userName = req.body.userName;
  const userPass = req.body.password;

  res.status(200).json({ username: userName, userpass: userPass });
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
