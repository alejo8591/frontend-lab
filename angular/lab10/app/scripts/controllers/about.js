'use strict';

/**
 * @ngdoc function
 * @name lab10App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lab10App
 */
angular.module('lab10')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
