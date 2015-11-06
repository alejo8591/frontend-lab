angular.module('lab2', ['ngCordova'])

    .controller('lab1Controller', function($scope, $cordovaDeviceMotion){

        document.addEventListener("deviceready", function() {

            var options = { frequency: 500 };

            var watch = $cordovaDeviceMotion.watchAcceleration(options).then(
                null,

                function(err) {
                    // An error occurred. Show a message to the user
                    console.log(err);
                },

                function(result) {
                    $scope.x = result.x;
                    $scope.y = result.y;
                    $scope.z = result.z;
                    $scope.time_stamp = result.timestamp;
            });

        }, false);
    });
