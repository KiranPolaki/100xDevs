import connectDB from "./db/db.js";
import { PORT } from "./config.js";
import { app } from "./server.js";

connectDB()
  .then(() => {
    app.listen(PORT || 3000, () => {
      console.log("💡 Server is running at http://localhost:1234");
    });
  })
  .catch((err) => {
    console.lof("MongoDb connection failed!", err);
  });
