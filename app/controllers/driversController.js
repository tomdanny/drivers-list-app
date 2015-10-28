(function () {


var DriversController = function ($scope, $routeParams, driversFactory) {

    var driverId = $routeParams.driverId;
    $scope.driver = null;

    function init() {
      // Search the drivers for the driverId
      $scope.driver = driversFactory.getDriver(driverId);
    }

      init();

  };

  DriversController.$inject = ['$scope', '$routeParams', 'driversFactory'];

  angular.module('driversListApp')
  .controller('DriversController', DriversController);

})();