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

  $scope.openModal = function(){
    $scope.modal.show();
  };
  $scope.closeModal = function(){
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function(){
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function(){
    // Execute action
  });

  // For example's sake, hide the sheet after two seconds
  $timeout(function(){
    $scope.openModal();
  }, 1000);

})

.controller('popupCtrl', function($scope, $ionicPopup, $timeout){
  // Triggered on a button click, or some other target
  $scope.showPopup = function(){
    $scope.data = {};
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.name">',
      title: 'ingrese su nombre',
      subTitle: 'Sin caracteres especiales',
      scope: $scope,
      buttons: [
        {text: 'Cancelar'},
        {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function(e){
            if (!$scope.data.name){
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.name;
            }
          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log('Ok!', res);
    });

    $timeout(function(){
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

  // A confirm dialog
  $scope.showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Acepta los cargos',
      template: 'Esta seguro de aceptar'
    });
    confirmPopup.then(function(res){
      if (res) {
        console.log('Esta de acuerdo');
      } else {
        console.log('no esta de acuerdo');
      }
    });
  };

  // An alert dialog
  $scope.showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: 'No es necesario',
      template: 'Le parece'
    });

    alertPopup.then(function(res){
      console.log('no es necesario');
    });
  };
})

.controller('eventsCtrl', function($scope, $ionicPopup){

  // An alert dialog
  $scope.showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: 'Eventos',
      template: 'Le parece'
    });

    alertPopup.then(function(res){
      console.log(res);
    });
  };
})

.controller('homeCtrl', function($scope) {

});
