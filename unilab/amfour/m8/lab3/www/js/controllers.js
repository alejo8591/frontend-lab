angular.module('app.controllers', ['ngCordova'])

.controller('pageCtrl', ['$scope', '$cordovaDeviceOrientation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaDeviceOrientation) {
  $scope.getDeviceOrientation = function(){
    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      $scope.magneticHeading = result.magneticHeading;
      console.log($scope.magneticHeading);
      $scope.trueHeading = result.trueHeading;
      $scope.accuracy = result.headingAccuracy;
      $scope.timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred
      console.log(err);
    });
  }
}]);
