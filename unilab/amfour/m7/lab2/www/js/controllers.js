angular.module('app.controllers', ['ngCordova'])

.controller('devicePluginCtrl', ['$scope', '$stateParams', '$cordovaNetwork', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $scope, $stateParams, $cordovaNetwork) {
  $scope.getNetworkInformation = function(){

    console.log('dio');
    $scope.type = $cordovaNetwork.getNetwork();

    $scope.isOnline = $cordovaNetwork.isOnline();

    $scope.isOffline = $cordovaNetwork.isOffline();


    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
      console.log(onlineState);
    });

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
      console.log(offlineState);
    });

  };
}])
