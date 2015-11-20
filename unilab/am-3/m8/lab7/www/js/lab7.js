angular.module('lab7', ['ngCordova'])
.controller('lab7Controller', function($scope, $cordovaDevice){

    document.addEventListener("deviceready", function(){

        console.log('load');

        $scope.device = $cordovaDevice.getDevice();

        console.log($scope.device);

        $scope.cordova = $cordovaDevice.getCordova();

        console.log($scope.cordova);

        $scope.model = $cordovaDevice.getModel();

        console.log($scope.model);

        $scope.platform = $cordovaDevice.getPlatform();

        console.log($scope.platform);

        $scope.uuid = $cordovaDevice.getUUID();

        console.log($scope.uuid);

        $scope.version = $cordovaDevice.getVersion();

        console.log($scope.version);

    }, false);
});
