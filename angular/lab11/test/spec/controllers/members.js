'use strict';

describe('Controller: MembersCtrl', function () {

  // load the controller's module
  beforeEach(module('lab11App'));

  var MembersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembersCtrl = $controller('MembersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
