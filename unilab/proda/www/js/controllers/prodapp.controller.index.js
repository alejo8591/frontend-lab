/* http://ow.ly/Od3WF */

'use strict';

angular.module('prodapp.controller.index',
    [
        'ionic',
        'prodapp.cookie.provider'
    ]
)


.controller('index', function($scope, $state, cookieProvider){

        console.log( typeof cookieProvider.cookie );

        console.log( typeof '86d049d72a63027eb736fe9b7e240e28' );

        console.log( toString(cookieProvider.cookie) === '86d049d72a63027eb736fe9b7e240e28' );

        if( cookieProvider.cookie === '86d049d72a63027eb736fe9b7e240e28' ) {



       } else {

            $state.transitionTo('options');

        }
})


.controller('options', function($scope, $state){

    if( window.localStorage.getItem('cookie') === 1 ) {



    } else {

        $scope.loadLogin = function() {

            $state.transitionTo('login');

        };

        $scope.loadRegister = function() {

            $state.transitionTo('register');

        };

    }
})


.controller('login', function($scope, $state){

    if( window.localStorage.getItem('cookie') === 1 ) {



    } else {


    }
})

.controller('register', function($scope, $state){

    if( window.localStorage.getItem('cookie') === 1 ) {



    } else {


    }
});