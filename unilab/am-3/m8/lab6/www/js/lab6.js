angular.module('lab6', ['ngCordova'])

.controller('lab6Controller', function($scope, $cordovaDeviceOrientation){


        console.log('ok dj');

        $scope.getData = function(){
            console.log('ok getData');
            $cordovaDeviceOrientation.getCurrentHeading().then(function(result){

                console.log('ok heading');
                $scope.magnetic_heading = result.magneticHeading;
                $scope.true_heading = result.trueHeading;
                $scope.accuracy = result.headingAccuracy;
                $scope.time_stamp = result.timestamp;
            }, function(err) {
                // An error occurred
                console.log('error');
            });
        };


});
