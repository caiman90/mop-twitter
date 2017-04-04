/**
 * Created by rejhan on 4.4.2017.
 */
var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    surname : {
        type: String
    },
    username : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    created_date : {
        type : Date,
        default : Date.now()
    }
});

var User = module.exports = mongoose.model("User",userSchema);

//getUsers
module.exports.getUsers = function (callback,limit) {
     User.find(callback).limit(limit);
}
module.exports.getUserById = function (id,callback){
     User.findById(id,callback);
}
module.exports.addUser = function (user,callback) {
    User.create(user,callback);
}