/**
 * Created by rejhan on 4.4.2017.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PORT_NUMBER = 3000;
var user = require("./models/user");
var tweets = require("./models/tweet");

app.use(bodyParser.json());
app.use(express.static(__dirname+'client'));
// Connection to mongoose
mongoose.connect("mongodb://localhost:27017/mop-twitter");
var db = mongoose.connection;

app.get('/',function(req,resp){
    resp.send("Hello MOP TWITTER CLONE");
});

app.get('/api/tweets',function(req,res){
   tweets.getTweets(function (error,tweets) {
      if(error){
          throw error;
      }
      res.json(tweets);
   });
});
app.listen(PORT_NUMBER);
console.log("Mop twitter started at port :"+ PORT_NUMBER);