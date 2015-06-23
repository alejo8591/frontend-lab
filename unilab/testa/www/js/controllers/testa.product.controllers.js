'use strict';

angular.module('TestaProductControllers', ['TestaProductServices'])

.controller('list', function($scope, ServiceProductList){

        ServiceProductList.products.query( function( data ) {

            $scope.products = data;

        } );

});