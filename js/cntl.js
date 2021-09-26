var app = angular.module('allCntl', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "pages/home.html"
    }).when("/AMe", {
      templateUrl : "pages/aboutMe.html"
    })
    .when("/404", {
      templateUrl : "404.html"
    }).otherwise({redirectTo: '/404'});
});