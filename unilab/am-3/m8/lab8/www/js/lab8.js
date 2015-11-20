angular.module('lab8', ['ngCordova'])

.controller('lab8Controller', function($scope, $cordovaDialogs) {

    $cordovaDialogs.alert('message', 'title', 'button name')
        .then(function() {
            // callback success
            console.log('message');
        });

    $cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
        .then(function(buttonIndex) {
            // no button = 0, 'OK' = 1, 'Cancel' = 2
            var btnIndex = buttonIndex;

            console.log(buttonIndex);
        });

    $cordovaDialogs.prompt('msg', 'tictle', ['btn 1','btn 2'], 'default text')
        .then(function(result) {
            var input = result.input1;
            // no button = 0, 'OK' = 1, 'Cancel' = 2
            var btnIndex = result.buttonIndex;

            console.log(input, btnIndex);
        });

    // beep 3 times
    $cordovaDialogs.beep(3);

    navigator.notification.beep(4);

});