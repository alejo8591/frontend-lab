'use strict';

angular.module('TestaProductServices', ['ngResource'])

.service('ServiceProductList', function($resource){

        this.products = $resource('http://localhost:7070/api/v1/product/list');

});
