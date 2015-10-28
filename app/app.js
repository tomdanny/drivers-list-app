(function() {

  var app = angular.module('driversListApp', ['ngRoute']);

  app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
          controller: 'ListController',
          templateUrl: 'app/views/list.html' 
        })
        .when('/drivers/:driverId', {
          controller: 'DriversController',
          templateUrl: 'app/views/drivers.html' 
        })
        .otherwise( { redirectTo: '/' });

  });

})(); 