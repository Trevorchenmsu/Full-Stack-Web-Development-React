const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "d497d52df7525ac2e420ed7e818f8eb2";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    // console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      // const object = {
      //   name: "jisheng",
      //   food: "rice"
      // }
      // console.log(JSON.stringify(object));
      const desript = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>the descrpition in " + query + " is " + desript + ".</h1>")
      res.write("<h1>the temparature in " + query + " is " + temp + "degrees.</h1>")
      res.write("<img src=" + imgURL + ">");
      res.send()
    })
  })
})



app.listen(3000, function() {
  console.log("Server is running on port 3000")
})
