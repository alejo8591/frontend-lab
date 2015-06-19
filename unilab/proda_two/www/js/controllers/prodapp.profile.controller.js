/* http://ow.ly/Od3WF */

'use strict';

angular.module('prodapp.profile.controller',
    [
        'ionic',
        'prodapp.cookie.provider',
        'prodappProfileServices',
        'ProdappProductServices'
    ]
)

.controller('index', function($scope, $state, cookieProvider) {

    console.log( 'index: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('prodapp.list');

    } else {

        $state.transitionTo('options');

    }
})


.controller('options', function($scope, $state, cookieProvider) {

    console.log( 'options: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('index');

    } else {

        $scope.loadLogin = function() {

            $state.transitionTo('login');

        };

        $scope.loadRegister = function() {

            $state.transitionTo('register');

        };

    }
})


.controller('login', function($scope, $state, cookieProvider, access) {

    console.log( 'login: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('index');

    } else {

        $scope.login_email = '';
        $scope.login_password = '';

        $scope.singIn = function() {

            access.login.signin(
                {
                    email: $scope.login_email,
                    password: $scope.login_password

                }, function(data){

                    console.log(data);

            });
        }

    }
})

.controller('register', function($scope, $state, cookieProvider) {

    console.log( 'register: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $state.transitionTo('index');

    } else {


    }
})

.controller('reset', function($scope, $state, cookieProvider) {

        console.log( 'reset: ' + cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() === true ) {

        console.log( 'reset password' );

    } else {

        $state.transitionTo('options');

    }
});