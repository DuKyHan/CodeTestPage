const express = require("express");
const fs = require("fs");
const route = express.Router();
const _ = require("lodash");
const pairNumberToCheck = [
  [1, 2],
  [3, 4],
  [10, 25],
];
const answers = [3, 7, 35];
route.post("/sum", (req, res, next) => {
  let booleanScanner = [false, false, false];
  let context = JSON.stringify(req.body.context);
  context = _.trim(context, ' "');
  fs.writeFile("./routes/sum/index.txt", context, (err) => {
    if (err) {
      res.send(booleanScanner);
    }
    fs.readFile(`./routes/sum/index.txt`, function (err, data) {
      try {
        eval(data.toString());
        func(1, 2);
        pairNumberToCheck.forEach((element) => {
          booleanScanner[pairNumberToCheck.indexOf(element)] =
            func(element[0], element[1]) ===
            answers[pairNumberToCheck.indexOf(element)];
        });
      } catch (error) {
        err = error.message;
      } finally {
        res.json({
          error: err,
          result: booleanScanner,
        });
      }
    });
  });
});
route.get("/sum", (req, res) => {
  res.json({
    question: "Calculate the two interger number",
  });
});

module.exports = route;
