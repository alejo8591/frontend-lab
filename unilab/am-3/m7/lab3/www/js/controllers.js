angular.module('app.controllers', ['ionic'])

.controller('cardsCtrl', function($scope) {

})

.controller('formCtrl', function($scope) {

})

.controller('toogleCtrl', function($scope) {

})

.controller('actionSheetCtrl', function($scope, $ionicActionSheet, $timeout) {

  // Triggered on a button click, or some other target
  $scope.show = function(){

    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>Share</b> This' },
        { text: 'Move' }
      ],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });

    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
      hideSheet();
    }, 2000);

  };

  // For example's sake, hide the sheet after two seconds
  $timeout(function() {
    $scope.show();
  }, 1000);

})

.controller('modalCtrl', function($scope) {

})

.controller('popupCtrl', function($scope) {

})

.controller('eventsCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})
