(function () {


  var ListController = function ($scope, $log, driversFactory, appSettings) {
  
    $scope.sortBy = 'firstName';
    $scope.reverse = false;
    $scope.lists = [];
    $scope.appSettings = appSettings;

    function init() {
      driversFactory.getLists()
        .success(function(lists) {
          $scope.lists = lists;
        })
        .error(function(data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

  };

  ListController.$inject = ['$scope', '$log', 'driversFactory', 'appSettings'];

  angular.module('driversListApp')
  .controller('ListController', ListController);

})();