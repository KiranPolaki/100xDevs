const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");

const app = express();
const secretPass = "secretToSignJwtUsallyALongAssString";

const userSchema = zod.string().email();
const passSchema = zod.string().min(8);

app.use(express.json());

const All_Users = [
  { username: "Sai@gmail.com", password: "123", name: "sai Kiran" },
  { username: "Dipika@gmail.com", password: "456", name: "dipika" },
  { username: "kitri@gmail.com", password: "789", name: "kitri" },
];

function userExist(username, password) {
  return (
    All_Users.filter(
      (user) => user.username === username && user.password === password
    ).length >= 1
  );
}

app.get("/users", (req, res) => {
  res.json({
    msg: "Send a req at route '/users' with username and password as headers",
  });
});

app.post("/users", (req, res) => {
  const userName = req.headers.username;
  const passWord = req.headers.password;
  const userResponse = userSchema.safeParse(userName);
  const passResponse = passSchema.safeParse(passWord);
  if (userResponse.success === false || passResponse.success === false) {
    res.json(null);
  }
  if (userExist(userName, passWord)) {
    return res.status(403).json({
      msg: "User exist in our in mebory DB",
    });
  }
  let Token = jwt.sign({ username: userName }, secretPass);
  const decode = jwt.verify(Token, secretPass);
  res.json({ jwt: decode });
  // i want to passs the token as header for the jwt get request
  // res.setHeader("Authorization", `Token`);
  // res.status(200).send("Token sent in header");
});

// app.get("/jwt", (req, res) => {
// i want to recieve that header hear ane use that for display something on the screen
// const token = req.get("Authorization");
// if (!token) {
//   return res.status(401).json({ error: "No token provided" });
// }
// try {
//   const decode = jwt.verify(token, secretPass);
//   res.json({ msg: `Welcome ${decode.username}` });
// } catch (error) {
//   res.status(400).json({ error: "Invalid token" });
// }
// });

app.listen(3000, () => {
  console.log("Listening at port 3000");
});

// * JWT
//1-Sign (Before signing we use the ZOD to verify checks)
//2-Verify
//3-Decode

// * ZOD
//1-Create string/object schema
