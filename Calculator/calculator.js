const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // console.log(req.body);
  // res.send("Thank you for clicking");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var ret = num1 + num2;

  res.send("the result is " + ret);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  // console.log(req.body);
  // res.send("Thank you for clicking");
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);
  var ret = w / (h+w);

  res.send("the result is " + ret);
});



app.listen(3000, function(){
  console.log("server is running on port 3000");
});
