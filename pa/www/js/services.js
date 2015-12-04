angular.module('app.services', ['ngResource'])

.factory('BlankFactory', function(){

})

.service('Product', function($resource){

  this.list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');
  this.detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id');
  this.edit = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/update/:id', {id: '@id'},
    {
      update: {
        method: 'PUT'
      }
    });
});

