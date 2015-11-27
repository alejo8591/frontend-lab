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

.controller('modalCtrl', function($scope, $ionicModal, $timeout){

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  // For example's sake, hide the sheet after two seconds
  $timeout(function(){
    $scope.openModal();
  }, 1000);

})

.controller('popupCtrl', function($scope, $ionicPopup, $timeout) {

})

.controller('eventsCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

});
