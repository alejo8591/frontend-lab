'use strict';

/**
 * @ngdoc function
 * @name lab11App.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the lab11App
 */
angular.module('lab11App')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
