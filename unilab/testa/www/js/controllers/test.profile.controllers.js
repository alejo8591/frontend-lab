'use strict';

angular.module('TestaProfileControllers', ['TestaProfileServices'])

.controller('profile', function($scope, $ionicModal, $state, ProfileService) {

    $scope.profile_edit_field = true;
    $scope.profile_delete_button = true;
    $scope.profile_edit_button = true;
    $scope.profile_update_button = true;

    var user = JSON.parse(window.localStorage.getItem('user'));

    ProfileService.profile.get({ email: user.email, action: 'find' },

        function( data ) {
            $scope.user = data;
        }
    );

    $scope.profileEdit = function() {

        $scope.profile_edit_field = false;
        $scope.profile_delete_button = false;
        $scope.profile_edit_button = false;
        $scope.profile_update_button = false;
    };


    $scope.profileUpdate = function() {

        ProfileService.profile.update(
            {
                email: user.email,
                action: 'update'
            },
            {
                "firstname": $scope.user.firstname,
                "lastname": $scope.user.lastname,
                "email": $scope.user.email,
                "phone": $scope.user.phone
            },
            function( data ) {

                console.log( data );

                $scope.profile_edit_field = true;
                $scope.profile_delete_button = true;
                $scope.profile_edit_button = true;
                $scope.profile_update_button = true;

            }

        );
    };


        /*
         * Modal
         * */

        $ionicModal.fromTemplateUrl('templates/profile/modal_delete_profile.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModalProfileDelete = function() {
            $scope.modal.show();
        };

        $scope.closeModalProfileDelete = function() {
            $scope.modal.hide();
        };

        $scope.profileDelete = function() {

            ProfileService.profile.delete(
                {
                    email: user.email,
                    action: 'delete'
                },
                null,

                function( data ) {

                    console.log( data );

                    $scope.closeModalProfileDelete();

                    window.localStorage.removeItem('cookie');

                    window.localStorage.removeItem('user');

                    $state.go('app.options', null,
                        { location: true, inherit: true, notify: true });


                }

            );
        };


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

                    window.localStorage.setItem('user', JSON.stringify(data));

                    $state.go('app.list');

                });
        };

})

.controller('login', function($scope, $state, ProfileLoginService) {

    $scope.login_data = {};

    $scope.doLogin = function() {

        ProfileLoginService.profile.login(null,
            {
                "email": $scope.login_data.email,
                "password": $scope.login_data.password
            },

            function( data ) {

                console.log( data );

                window.localStorage.setItem('cookie', data.cookie);

                window.localStorage.setItem('user', JSON.stringify(data));

                $state.go('app.list');

            });

    };



});
