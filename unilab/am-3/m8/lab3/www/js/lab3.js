angular.module('lab3', ['ngCordova'])

.controller('lab3Controller', function($rootScope, $scope, $cordovaNetwork){

    document.addEventListener("deviceready", function(){

        console.log('deviceready');

        $scope.type = '';

        $scope.is_online = '';

        $scope.is_offline = '';

        $scope.allInfo = function(){

            console.log('allInfo');

            $scope.type = $cordovaNetwork.getNetwork();

            $scope.is_online = $cordovaNetwork.isOnline();

            $scope.is_offline = $cordovaNetwork.isOffline();
        };


        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            var onlineState = networkState;
            console.log(networkState);
        });

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
            var offlineState = networkState;
            console.log(networkState);

        });

    }, false);
});
