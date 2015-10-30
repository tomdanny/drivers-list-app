(function() {

  var driversFactory = function($http) {

    var factory = {};

    factory.getLists = function() {

      return $http.get('/drivers');

    };

    factory.getDriver = function(driverId) {
      return $http.get('/drivers/' + driverId);
    };

    return factory;

  };

  driversFactory.$inject = ['$http']

  angular.module('driversListApp').factory('driversFactory', driversFactory);

})();