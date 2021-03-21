let express = require("express");
let app = express();

app.use("/styles",express.static(__dirname + "/styles"));
app.use("/scripts",express.static(__dirname + "/scripts"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/files",express.static(__dirname + "/files"));


app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.listen(1000, function () {
    console.log("The Personal Website Server Has Started!!");
  });