angular.module('app.controllers', ['ngCordova'])

.controller('homeCtrl', function($scope){

})

.controller('formCtrl', function($scope, $cordovaSQLite){

  var db = $cordovaSQLite.openDB({ name: "lab6.db", bgType: 1 });

  $scope.insert = function(firstname, lastname) {
    var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
    $cordovaSQLite.execute(db,query,[firstname,lastname]).then(function(result){
      console.log("INSERT ID -> " + result.insertId);
    }, function(error) {
      console.error(error);
    });
  };

  $scope.select = function(lastname) {
    var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
    $cordovaSQLite.execute(db,query,[lastname]).then(function(result) {
      if(result.rows.length > 0) {
        console.log("SELECTED -> " + result.rows.item(0).firstname + " " + result.rows.item(0).lastname);
      } else {
        console.log("NO ROWS EXIST");
      }
    }, function(error) {
      console.error(error);
    });
  };

  $scope.insert('alejandro', 'romero');
  $scope.select('romero');

});
