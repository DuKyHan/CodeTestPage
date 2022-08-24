const express = require("express");
const route = express.Router();
const fs = require("fs");
const _ = require("lodash");

const pairNumberToCheck = [
  [1, 2, 3],
  [1, 2, 3],
  [5, 3, 6],
];
const answers = [6, 6, 14];

route.post("/find", (req, res, next) => {
  let booleanScanner = [false, false, false];
  let context = JSON.stringify(req.body.context);
  context = _.trim(context, ' "');
  fs.writeFile("./routes/TotalAllElementInArray/index.txt", context, (err) => {
    if (err) {
      res.send(booleanScanner);
    }
    fs.readFile(
      "./routes/TotalAllElementInArray/index.txt",
      function (e, data) {
        let err;
        try {
          eval("var func = " + data.toString());
          pairNumberToCheck.forEach((element) => {
            booleanScanner[pairNumberToCheck.indexOf(element)] =
              func(element) === answers[pairNumberToCheck.indexOf(element)];
          });
        } catch (error) {
          err = error.message;
        } finally {
          res.json({
            error: err,
            result: booleanScanner,
          });
        }
      }
    );
  });
});
route.get("/find", (req, res, next) => {
  res.json({
    question: "Find the particular number in array and return the this index.",
  });
});

module.exports = route;
