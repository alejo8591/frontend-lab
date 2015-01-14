'use strict';

angular
.module('lab10')
.controller('MainCtrl', function($scope, localStorageService){
  $scope.tasksOnStorage = localStorageService.get('tasks');

  $scope.tasks = $scope.tasksOnStorage && $scope.tasksOnStorage.split('\n') || [];

  $scope.$watch('tasks', function(){
    localStorageService.add('tasks', $scope.tasks.join('\n'));
  }, true);

  $scope.addTask = function(){
    $scope.tasks.push($scope.task);
    $scope.task = '';
  };

  $scope.deleteTask = function(index){
    $scope.tasks.splice(index, 1);
  };

});
