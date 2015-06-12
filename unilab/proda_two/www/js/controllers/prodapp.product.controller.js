'use strict';

angular.module('prodapp.product.controller',
    [
        'ionic',
        'prodapp.cookie.provider'
    ]
)

.controller('add', function($scope, $state, cookieProvider) {

    console.log( cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {


    } else {

        $state.transitionTo('options');

    }
})


.controller('list', function($scope, $state, cookieProvider) {

    console.log( cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {


    } else {

        $state.transitionTo('options');

    }
})

.controller('product', function($scope, $state, $stateParams, cookieProvider) {

    console.log( cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {


    } else {

        $state.transitionTo('options');

    }
});