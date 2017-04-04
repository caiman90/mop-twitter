/**
 * Created by rejhan on 4.4.2017.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PORT_NUMBER = 3000;

// Connection to mongoose
mongoose.connect("mongodb://localhost:27017/mop-twitter");
var db = mongoose.connection;

app.get('/',function(req,resp){
    resp.send("Hello MOP TWITTER CLONE");
});
app.listen(PORT_NUMBER);
console.log("Mop twitter started at port :"+ PORT_NUMBER);