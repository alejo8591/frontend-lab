/* http://ow.ly/Od3WF */

'use strict';

angular.module('prodapp.profile.controllers',
    [
        'ionic',
        'prodapp.cookie.provider',
        'prodapp.constants',
        'prodappProfileServices',
        'ProdappProductServices'
    ]
)

.controller('index', function($scope, $state, cookieProvider) {

    console.log( 'index: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('app.list');

    } else {

        $state.transitionTo('app.options');

    }
})


.controller('options', function($scope, $state, cookieProvider) {

    console.log( 'options: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('app.list');

    } else {

        $scope.loadLogin = function() {

            $state.transitionTo('app.login');

        };

        $scope.loadRegister = function() {

            $state.transitionTo('app.register');

        };

    }
})


.controller('login', function($scope, $state, $rootScope, cookieProvider, access, COOKIE_VALUE) {

    console.log( 'login: ' + cookieProvider.flagCookie() );

        $scope.login_data = {};

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('app.list');

    } else {

        console.log($scope.login_data.password, $scope.login_data.email);

        $scope.signIn = function() {

            console.log($scope.login_data.password, $scope.login_data.email);

            access.login.signin(
                {
                    "email": $scope.login_data.email,
                    "password": $scope.login_data.password
                },

                function( data ){

                    console.log( data );

                    window.localStorage.setItem('cookie', COOKIE_VALUE);

                });


            $state.transitionTo('app.list', {}, { reload: true, inherit: false, notify: true });
        }

    }
})

.controller('register', function($scope, $state, cookieProvider) {

    console.log( 'register: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('app.list');

    } else {


    }
})

.controller('reset', function($scope, $state, cookieProvider) {

    console.log( 'reset: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() === true ) {

        console.log( 'reset password' );

    } else {

        $state.transitionTo('app.options');

    }
});
