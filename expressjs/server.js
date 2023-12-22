const express = require("express");

const app = express();

const port = process.env.port || 3000;

const path = require("path");

const mainRouter = require("./routes/index");

//ejs template engine
app.set("view engine", "ejs");

// console.log(app.get("view engine"));
// console.log(app.get("views"));

app.use(express.static("public"));

app.use(mainRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
