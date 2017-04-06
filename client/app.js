/**
 * Created by rejhan on 4.4.2017.
 */
var mopTwitter = angular.module('mop-twitter',['ngRoute']);

mopTwitter.config(function ($routeProvider) {
    $routeProvider.when('/',{
        controller:'TweetsController',
        templateUrl:'views/tweets.html'
    }).when('/tweetDetails',{
        controller:'TweetsController',
        templateUrl:'views/tweets.html'
    }).when('/login',{
        controller:'LoginController',
        templateUrl:'views/login.html'
    }).when('/register',{
        controller:'RegisterController',
        templateUrl:'views/register.html'
    }).otherwise({redirectTo:'/'});

});