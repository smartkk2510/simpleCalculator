/**
 * @jest-environment jsdom
 */
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const calc = require(__dirname + "/calculator");
//console.log(calc);

let num1;
let num2;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/calculator.html");
});
app.get("/calc/:op", async (req, res) => {
  let operations = req.params.op;
  // var result = "";
  console.log(operations);
  if (operations === "add") {
    result = await calc.add(num1, num2);
    res.json(result);
    //  console.log(result);
  } else if (operations === "sub") {
    result = await calc.sub(num1, num2);
    res.json(result);
  } else if (operations === "mul") {
    result = await calc.mul(num1, num2);
    res.json(result);
  } else if (operations === "div") {
    result = await calc.div(num1, num2);
    res.json(result.toFixed(2));
  } else {
    result = "select any thing";
    res.json(result);
  }
});

app.post("/", (req, res) => {
  console.log(req.body);
  num1 = parseFloat(req.body.num1);
  num2 = parseFloat(req.body.num2);
  //operations = req.body.operation;
  //  console.log(operations);
  //res.redirect("/calc");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});
