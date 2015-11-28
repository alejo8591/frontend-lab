angular.module('app.services', ['ngResource'])

.service('Products', function($resource){

    this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');
    this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create');
});