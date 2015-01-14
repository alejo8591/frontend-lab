'use strict';

describe('Controller: GalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('lab11App'));

  var GalleryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryCtrl = $controller('GalleryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});