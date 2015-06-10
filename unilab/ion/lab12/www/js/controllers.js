angular.module( 'lab12.Controllers', [] )

.controller('lab12.HomeController',function( $scope ) {

        $scope.home = 'Hello World';
})

.controller('lab12.AboutController',function( $scope, $ionicModal ) {

    $ionicModal.fromTemplateUrl('templates/about-modal.html', {

        scope: $scope,
        animation: 'slide-in-up'

    }).then(function(modal) {

        $scope.modal = modal;

    });

    $scope.openModal = function() {

        console.log( 'Modal OK' );

        $scope.modal.show();

    };


    $scope.closeModal = function() {

        console.log( 'Modal OK' );

        $scope.modal.hide();

    };
});