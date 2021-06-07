const express = require("express");

const app = express();

app.get("/", function(req, res) {
  // console.log(request);
  res.send("<h1>hey man, what's up</h1>");
})

app.get("/contact", function(req, res){
  res.send("contact me at: aaa@gmail.com")
})

app.get("/about", function(req, res){
  res.send("my name is jisheng")
})

app.get("/hobbies", function(req, res){
  res.send("swimming and others")
})

app.listen(3000, function() {
  console.log("server starting on port 3000");
});
