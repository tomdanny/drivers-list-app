(function () {


var DriversController = function ($scope, $routeParams, driversService) {

    var driverId = $routeParams.driverId;
    $scope.driver = null;

    function init() {
      // Search the drivers for the driverId
      $scope.driver = driversService.getDriver(driverId);
    }

      init();

  };

  DriversController.$inject = ['$scope', '$routeParams', 'driversService'];

  angular.module('driversListApp')
  .controller('DriversController', DriversController);

})();