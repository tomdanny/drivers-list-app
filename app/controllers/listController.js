(function () {


  var ListController = function ($scope, driversService) {
  
    $scope.sortBy = 'firstName';
    $scope.reverse = false;
    $scope.lists = [];

    function init() {
      $scope.lists = driversService.getLists();
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

  };

  ListController.$inject = ['$scope', 'driversService'];

  angular.module('driversListApp')
  .controller('ListController', ListController);

})();