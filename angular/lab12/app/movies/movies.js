angular.module('myApp.movies', [])
.controller('MoviesListCtrl', ['$scope', 'rtmFactory', function($scope, rtmFactory){
  $scope.countries = rtmFactory.getCountries();
}]);
