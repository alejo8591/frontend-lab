'use strict';

/**
 * @ngdoc function
 * @name lab9App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lab9App
 */
angular.module('lab9App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Trello',
      'Yopo'
    ];
  });
