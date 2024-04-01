import { User } from "../db/index.js";

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const userExist = await User.findOne({
    username: username,
    password: password,
  });
  if (userExist) {
    next();
  } else {
    res.status(403).json({
      msg: "User doesnt exist",
    });
  }
}

export { userMiddleware };
