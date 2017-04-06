/**
 * Created by rejhan on 4.4.2017.
 */
var mopTwitter = angular.module('mop-twitter');

mopTwitter.controller('LoginController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
$scope.login = function () {
    //$http.post()
    alert($scope.user.username);
}
}]);