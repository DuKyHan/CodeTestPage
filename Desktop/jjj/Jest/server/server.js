const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const routes = require("./routes/index");
// const sum = require("./routes/sum/sum");
app.listen(
  process.env.PORT || 8888,
  console.log(`Server listening on port ${process.env.PORT}`)
);
app.use("/", require("./routes"));
