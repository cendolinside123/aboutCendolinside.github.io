var app = angular.module('allCntl', ['ngRoute']);
app.config(function($routeProvider,$locationProvider,$httpProvider) {
    $routeProvider
    .when("/", {
      title: "/",
      templateUrl: "pages/home.html"
    }).when("/AMe", {
      title: "/AMe",
      templateUrl: "pages/aboutMe.html"
    })
    .when("/404", {
      title: "/404 LOL what're you expect?",
      templateUrl: "pages/404.html"
    }).otherwise({redirectTo: '/404'});
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
});
app.controller('ngengTitle',function($scope, $location) {
  $scope.title = $location.path()
})
myApp.run(function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

      if (current.hasOwnProperty('$$route')) {

          $rootScope.title = current.$$route.title;
      }
  });
});
