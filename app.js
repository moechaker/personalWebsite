let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.listen(1000, function () {
    console.log("The Personal Website Server Has Started!!");
  });