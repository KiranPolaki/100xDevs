import express from "express";
import adminRouter from "./routes/admin.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = 3000;
const jwtSecret = "PolakiServer";

app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

export { jwtSecret };
