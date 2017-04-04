/**
 * Created by rejhan on 4.4.2017.
 */
var mongoose = require("mongoose");

var tweetSchema = mongoose.Schema({
    tweet_text : {
        type: String,
        required : true
    },
    created_date : {
        type : Date,
        default : Date.now()
    }
});

var Tweet = module.exports = mongoose.model("Tweet",tweetSchema);

// getTweets
module.exports.getTweets = function (callback,limit) {
    Tweet.find(callback).limit(limit);
}
module.exports.addTweet = function (tweet,callback) {
    Tweet.create(tweet,callback);
}

