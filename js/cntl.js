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
app.controller('headerController',function($scope,$window,$location) {
  var screenWidth = $window.innerWidth;
  $scope.includeDesktopTemplate = false;
  $scope.includeMobileTemplate = false;
  if (screenWidth < 700){  
      $scope.includeMobileTemplate = true;
  }else{
      $scope.includeDesktopTemplate = true;
  }
  console.log("PATH:"+$window.location.pathname);
  console.log("LOCATION:"+$window.location);
  $scope.selectPage = "/"
  $scope.updatePage = function(selectPage) {
    if (selectPage == "/") {
      $location.path("/")
    } else if (selectPage == "AMe") {
      $location.path("/AMe")
    } else {
      $location.path("/404")
    }
 }

})
app.controller('homeController',function($scope) {})
// app.controller('ngengTitle',function($scope, $location) {
//   $scope.title = $location.path()
// })
// app.run(function($location, $rootScope, $scope) {
//   $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

//       if (current.hasOwnProperty('$$route')) {

//           $rootScope.title = current.$$route.title;
//       }
//   });
// });
