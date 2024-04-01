import jwt from "jsonwebtoken";
import { jwtSecret } from "../index.js";

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  // * Get the token from this Bearer ahdaaaaaasusu
  const words = token.split(" ");
  const jwtToken = words[1];

  const decodedValue = jwt.verify(jwtToken, jwtSecret);

  // * We should also further validate if the decodedValue.type: admin || user
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authorization",
    });
  }
}

export { adminMiddleware };
