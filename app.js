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
const port = process.env.PORT || 3000;
app.listen(port, () => {
    // console.log('The Personal Website Server Has Started On ${port}');
    console.log(`The Personal Website Server Has Started on ${port}`)
  });