'use strict';

/**
 * @ngdoc function
 * @name lab9App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lab9App
 */
angular.module('lab9App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
