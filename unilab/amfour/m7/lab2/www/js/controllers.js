angular.module('app.controllers', ['ngCordova'])

.controller('pageCtrl', ['$scope', '$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaNetwork) {
  $scope.getNetworkInformation = function(){
    console.log('drop');
    var type = $cordovaNetwork.getNetwork();

    var isOnline = $cordovaNetwork.isOnline();

    var isOffline = $cordovaNetwork.isOffline();

    console.log(type, isOffline, isOnline);
  };
}]);
