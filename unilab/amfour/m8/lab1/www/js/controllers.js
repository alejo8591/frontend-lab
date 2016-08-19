angular.module('app.controllers', ['ngCordova'])

.controller('devicePluginCtrl', ['$scope', '$stateParams', '$cordovaDevice',// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {

  $scope.getDeviceInfo = function(){
    $scope.items =[
      {name: $cordovaDevice.getDevice()},

      {name: $cordovaDevice.getCordova()},

      {name: $cordovaDevice.getModel()},

      {name: $cordovaDevice.getPlatform()},

      {name:$cordovaDevice.getUUID()},

      {name: $cordovaDevice.getVersion()}
    ];
  };


}]);
