'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.services',
  'myApp.movies'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'movies/list-movies.html', controller: 'MoviesListCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
