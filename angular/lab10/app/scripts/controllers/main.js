'use strict';

angular
.module('lab10')
.controller('MainCtrl', function($scope){
  $scope.tasks = ['Tasks 1', 'Tasks 2', 'Tasks 3', 'Tasks 4', 'Tasks 5', 'Tasks 6'];

  $scope.addTask = function(){
    $scope.tasks.push($scope.task);
    $scope.task = '';
  };

  $scope.deleteTask = function(index){
    $scope.tasks.splice(index, 1);
  };

});
