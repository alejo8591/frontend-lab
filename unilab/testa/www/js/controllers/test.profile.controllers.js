'use strict';

angular.module('TestaProfileControllers', ['TestaProfileServices'])

.controller('profile', function($scope, ProfileService) {

})

.controller('options', function($scope, $state) {


    $scope.loadLogin = function() {

        $state.go('app.login');

    };

    $scope.loadRegister = function() {

        $state.go('app.register');

    };

})

.controller('register', function($scope, $ionicModal, $state, ProfileCreateService) {

        $scope.user = {};

        /*
         * Modal
         * */

        $ionicModal.fromTemplateUrl('templates/profile/modal_create_profile.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModalProfileCreate = function() {
            $scope.modal.show();
        };

        $scope.closeModalProfileCreate = function() {
            $scope.modal.hide();
        };

        $scope.profileCreate = function() {

            ProfileCreateService.profile.save(null,
                {
                    "firstname": $scope.user.firstname,
                    "lastname": $scope.user.lastname,
                    "email": $scope.user.email,
                    "phone": $scope.user.phone,
                    "password": $scope.user.password
                },

                function( data ) {

                    console.log ( data );

                    $scope.closeModalProfileCreate();

                    window.localStorage.setItem('cookie', data.cookie);

                    $state.go('app.list');

                });
        };

})

.controller('login', function($scope) {

});
