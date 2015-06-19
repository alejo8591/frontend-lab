'use strict';

angular.module('prodapp.product.controllers',
    [
        'ionic',
        'prodapp.cookie.provider',
        'ProdappProductServices'
    ]
)

.controller('add', function($scope, $state, cookieProvider) {

    console.log( cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {


    } else {

        $state.transitionTo('options');

    }
})


.controller('list', function($scope, $state, $ionicSideMenuDelegate, cookieProvider, ProductListService) {

    console.log( cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        ProductListService.product_list.query(function(data){
            $scope.products = data;
        });

    } else {

        $state.transitionTo('options');

    }
})

.controller('product', function($scope, $state, $stateParams, $window, cookieProvider, ProductDetailService) {

    console.log( cookieProvider.flagCookie() );

    if( cookieProvider.flagCookie() ) {

        $scope.product_edit_field = true;
        $scope.product_delete_button = true;
        $scope.product_edit_button = true;
        $scope.product_update_button = true;

        $scope.product_edit = ProductDetailService.product_detail.get(

            { id: $stateParams.id, action: 'find' },

            function(data){

                console.log( data );

                $scope.product = data;
            });

        $scope.productEdit = function() {

            $scope.product_edit_field = false;
            $scope.product_delete_button = false;
            $scope.product_edit_button = false;
            $scope.product_update_button = false;
        };

        $scope.productUpdate = function() {

            ProductDetailService.product_detail.update(
                {
                    id: $stateParams.id,
                    action: 'update'
                },
                {
                    "name": $scope.product.name,
                    "type": $scope.product.type,
                    "quantity": $scope.product.quantity,
                    "price": $scope.product.price
                },

                function( data ) {

                    console.log( data );

                    $scope.product_update_button = $scope.product_edit_button = $scope.product_delete_button = $scope.product_delete_button = $scope.product_edit_field = true;

                    //$window.location.reload(true);
                }

            );

        };


    } else {

        $state.transitionTo('options');

    }
});