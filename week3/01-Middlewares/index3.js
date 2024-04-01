const express = require("express");

const app = express();
let errorcount = 0;

function globalCatches(err, req, res, next) {
  errorcount++;
  res.status(404).json({ Msg: err.stack });
}

app.use((req, res, next) => {
  try {
    next();
  } catch (err) {
    next(err);
  }
});

app.get("/", (req, res) => {
  try {
    //this will diff throw an error
    const userName = req.body.username;
  } catch (err) {
    next(err);
  }
});

app.use(globalCatches);

app.listen("3000", () => {
  console.log("Litening to port 3000");
});
