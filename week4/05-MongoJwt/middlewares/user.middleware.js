import jwt from "jsonwebtoken";
import { jwtSecret } from "../index.js";

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  const decodedValue = jwt.verify(jwtToken, jwtSecret);

  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authorization",
    });
  }
}

export { userMiddleware };
