import express from "express";
import cors from "cors";
const app = express();

// * Middlewares
app.use(cors({}));
app.use(express.json());

const connect = await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

app.get("/", (req, res) => {
  res.json({
    msg: "whatever",
  });
});

export { app };
