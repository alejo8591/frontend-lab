/* http://ow.ly/Od3WF */

'use strict';

angular.module('prodapp.controller.index',
    [
        'ionic',
        'prodapp.cookie.provider'
    ]
)

.controller('index', function($scope, $state, cookieProvider) {

        console.log( cookieProvider.flagCookie() );

        if( cookieProvider.flagCookie() ) {


        } else {

            $state.transitionTo('options');

        }
})


.controller('options', function($scope, $state, cookieProvider) {


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


.controller('login', function($scope, $state, cookieProvider) {

    if( cookieProvider.flagCookie() === true ) {

        $state.transitionTo('index');

    } else {


    }
})

.controller('register', function($scope, $state, cookieProvider) {

    if( cookieProvider.flagCookie() === true ) {

        $state.transitionTo('index');

    } else {


    }
});