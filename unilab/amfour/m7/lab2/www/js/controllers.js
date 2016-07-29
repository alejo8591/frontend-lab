angular.module('app.controllers', ['ngCordova'])

.controller('homeCtrl', function($scope, $cordovaDialogs) {
  $cordovaDialogs.alert('message', 'title', 'button name')
    .then(function() {
      // callback success
      console.log('hello');
    });
})

.controller('cartCtrl', function($scope, $cordovaDialogs) {
  $cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
      console.log(btnIndex);
    });

})

.controller('cloudCtrl', function($scope, $cordovaDialogs) {
  $cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
      console.log(btnIndex, input);
    });

})
