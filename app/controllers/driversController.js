(function () {


var DriversController = function ($scope, $routeParams, driversFactory) {

    var driverId = $routeParams.driverId;
    $scope.driver = null;

    function init() {
      // Search the drivers for the driverId
      driversFactory.getDriver(driverId)
        .success(function(driver) {
          $scope.driver = driver;
        })
        .error(function(data, status, headers, config) {
          console.log(data.error)
        });
    }

      init();

  };

  DriversController.$inject = ['$scope', '$routeParams', 'driversFactory'];

  angular.module('driversListApp')
  .controller('DriversController', DriversController);

})();