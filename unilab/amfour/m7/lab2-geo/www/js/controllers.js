angular.module('app.controllers', ['ngCordova'])

.controller('homeCtrl', function($scope, $cordovaGeolocation) {
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat + " --- " + long);
    }, function(err) {
      // error
    });
})

.controller('cartCtrl', function($scope) {

})

.controller('cloudCtrl', function($scope) {

})
