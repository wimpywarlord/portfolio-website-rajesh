const express = require("express");
const app = express();

var methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    res.render("./index.ejs");
  });

app.listen(process.env.PORT || 5000, () => {
    console.log("working in 5000");
  });