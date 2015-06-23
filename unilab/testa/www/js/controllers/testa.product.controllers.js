'use strict';

angular.module('TestaProductControllers', ['TestaProductServices'])

.controller('list', function($scope, ProductListService){

    ProductListService.products.query( function( data ) {

        $scope.products = data;

    } );


    $scope.doRefresh = function() {
        ProductListService.products.query(function(data){
            $scope.products = data;
        });
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

})

.controller('product', function($scope, ProductOptionsService, $stateParams) {

    $scope.product_edit_field = true;
    $scope.product_delete_button = true;
    $scope.product_edit_button = true;
    $scope.product_update_button = true;

    ProductOptionsService.product.get(

        { id: $stateParams.id, action: 'find' },

        function(data){

            console.log( data );

            $scope.product = data;
        }
    );

    $scope.productEdit = function() {

        $scope.product_edit_field = false;
        $scope.product_delete_button = false;
        $scope.product_edit_button = false;
        $scope.product_update_button = false;
    };

    $scope.productUpdate = function() {

        ProductOptionsService.product.update(
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

            }

        );

    };
});