angular.module('lab10', ['ngCordova'])
.controller('lab10Controller', function($scope, $cordovaCamera) {

    document.addEventListener("deviceready", function () {

        var options = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        $cordovaCamera.getPicture(options).then(function(imageURI) {
            $scope.image = imageURI;
        }, function(err) {
            // error
        });


        $cordovaCamera.cleanup().then(function(_data){
            console.log(_data);
        }); // only for FILE_URI

    }, false);
});