const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

//middle ware to use the body
app.use(express.json());

const All_Users = [
  { username: "Sai@gmail.com", password: "123", name: "sai Kiran" },
  { username: "Dipika@gmail.com", password: "456", name: "dipika" },
  { username: "kitri@gmail.com", password: "789", name: "kitri" },
];

function userExists(username, password) {
  return (
    All_Users.filter(
      (user) => user.username === username && user.password === password
    ).length >= 1
  );
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in mebory DB",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  // console.log(userExists(username, password));
  res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const userName = decoded.username;
    res.json({});
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("lsitening at port 3000");
});
