const express = require("express");
const app = express();
let numberOfRequests = {};

setInterval(() => {
  numberOfRequests = {};
}, 10000);

function rateLimiter(req, res, next) {
  const username = req.body.username;
  const password = req.headers["pass"];

  if (!username) {
    res.json("Username is required for the req header");
  }
  if (!numberOfRequests[username]) {
    numberOfRequests[username] = 1;
  } else if (numberOfRequests[username] < 5) {
    numberOfRequests[username]++;
  } else {
    res.status(429).json("Too many req asshole! calm down", password);
    return;
  }
  next();
}

app.use(express.json());

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.json("This is the rate limiter one");
});

app.post("/user", (req, res) => {
  res.status(200).json(numberOfRequests);
});

app.listen(3001, () => {
  console.log("Listening at portg 3001");
});
