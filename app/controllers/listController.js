(function () {


  var ListController = function ($scope, driversFactory) {
  
    $scope.sortBy = 'firstName';
    $scope.reverse = false;
    $scope.lists = [];

    function init() {
      $scope.lists = driversFactory.getLists();
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

  };

  ListController.$inject = ['$scope', 'driversFactory'];

  angular.module('driversListApp')
  .controller('ListController', ListController);

})();