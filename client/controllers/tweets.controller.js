/**
 * Created by rejhan on 4.4.2017.
 */
var mopTwitter = angular.module('mop-twitter');

mopTwitter.controller('TweetsController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
    $scope.getTweets = function(){
        $http.get('/api/tweets').then(function (response) {
            $scope.tweets = response.data;
            $scope.getUserById();
        })
    }
    $scope.getUserById = function () {
        var id = "58e3a384f36952378273a341";
        $http.get('/api/user/'+id).then(function (response) {
            $scope.user = response.data;
        })

    }
}]);