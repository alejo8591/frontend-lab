'use strict';

/**
 * @ngdoc function
 * @name lab11App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lab11App
 */
angular.module('lab11')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
