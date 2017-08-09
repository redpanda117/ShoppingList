// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//getting the static files here it is the images and css
app.use(express.static(__dirname + "/public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));                       
                       
// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");                       
                       
// Import routes and give the server access to them.
var routes = require("./controllers/item_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
