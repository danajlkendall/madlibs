var app = angular.module('madlibApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
      .when('/startStory',
      {
        controller:'madlibController',
        templateUrl: 'startstory.html'
      })
      .when ('/seeStory',
      {
        controller: 'otherController',
        templateUrl: 'seestory.html'
      })
      .otherwise('/startStory',
      {
        controller:'madlibController',
        templateUrl: 'startstory.html'
      });

  $locationProvider.hashPrefix('');
});

app.controller('madlibController', function($scope, $location, madlibFactory){
  $scope.sendInfo = function(name, noun, month, animal, adjective1, adjective2, number1, number2){
    madlibFactory.pass(name, noun, month, animal, adjective1, adjective2, number1, number2);
    $location.path('/showStory');
  }
});

app.controller('otherController', function($scope, madlibFactory){
  $scope.storyInfo = madlibFactory.retrieveInfo();
});
