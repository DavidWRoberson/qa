var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/static'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(8000, function() {
    console.log("Running on 8000");
})