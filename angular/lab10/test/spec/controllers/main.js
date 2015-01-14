'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lab10'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  /*
  it('should attach a list of `Tasks` to the scope', function () {
    expect(scope.tasks.length).toBe(6);
  });

  it('Add items for the list', function(){
    scope.task = 'Task 7';
    scope.addTask();
    expect(scope.tasks.length).toBe(7);
  });

  it('Remove items for the list', function(){
    scope.deleteTask(1);
    expect(scope.tasks.length).toBe(5);
  });

  it('Add and Remove items for the list', function(){
    scope.task = 'Task 7';
    scope.addTask();
    scope.deleteTask(1);
    expect(scope.tasks.length).toBe(6);
  });*/
});
