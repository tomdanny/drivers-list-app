(function() {

  var driverFactory = function() {

    var lists = [
      {
        id: 1,
        name: [
          { 
            id: 1,
            firstName: 'Daniel',
            lastName: 'Tomic'
          }
        ],
        city: 'New York', 
        date: '2012-11-9'
      }, 
      {
        id: 2,
         name: [
          { 
            id: 2,
            firstName: 'Laris',
            lastName: 'Pezzulich'
          }
        ], 
        city: 'Texas', 
        date: '2014-6-9'
      }, 
      { 
        id: 3,
         name: [
          { 
            id: 3,
            firstName: 'Dean',
            lastName: 'Tomic'
          }
        ],
        city: 'New Jersey', 
        date: '2009-10-5'
      }

    ];

    var factory = {};
    
    factory.getLists = function() {
      return lists;
    };

    factory.getDriver = function(driverId) {
      for (var i = 0, len = lists.length; i < len; i++) {
        if (lists[i].id === parseInt(driverId)) {
            return lists[i];
        }
      }
      return {};
    };

    return factory;

  };

  angular.module('driversListApp').factory('driversFactory', driverFactory);

})();