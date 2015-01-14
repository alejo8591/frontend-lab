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

  it('should attach a list of `Tasks` to the scope', function () {
    expect(scope.tasks.length).toBe(6);
  });
});
