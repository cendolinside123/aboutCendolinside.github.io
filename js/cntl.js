var app = angular.module('allCntl', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "index.html"
    }).when("/AMe", {
      templateUrl : "aboutMe.html"
    })
    .when("/404", {
      templateUrl : "404.html"
    }).otherwise({redirectTo: '/404'});
});