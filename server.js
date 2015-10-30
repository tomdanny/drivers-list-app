var express = require('express')
var app = express();


app.use(express.static(__dirname + '/'));


app.get('/drivers/:id', function(req, res) {

  var driversId = parseInt(req.params.id);
  var data = {};

  for (var i = 0, len = lists.length; i < len; i++) {
    if(lists[i].id === driversId) {
      data = lists[i];
      break;
    }
  }

  res.json(data);

});

app.get('/drivers', function(req, res) {
  // res.json(lists);
  res.json(500, { error: 'An error has occurred!' });
});

app.listen(8080);

console.log('Express listening on port 8080');

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