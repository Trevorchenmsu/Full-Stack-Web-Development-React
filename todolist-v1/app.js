const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  // res.send("Hello");
  var today = new Date();
  var day = "";
  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "weekend";
    // res.send("Yay it is the weekend.")
    res.render("list", {kindOfDay:day});
  }
  else {
    // res.send("it is workday");
    day = "weekday";
    // res.sendFile(__dirname + "/index.html")
    res.render("list", {kindOfDay:day});
  }
})


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
