const express = require("express");
const routes = express.Router();

routes.use("/check", require("./sum"));
routes.use("/check", require("./TotalAllElementInArray"));
module.exports = routes;
