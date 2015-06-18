'use strict';

angular.module('ProdappProductServices', ['ngResource'])

.service('ProductListService', function($resource){

        this.product_list = $resource('http://localhost:7070/api/v1/product/list');
})

.service('ProductDeatilService', function($resource){

    this.product_detail = $resource('http://localhost:7070/api/v1/product/:id/:action',
        { id: '@id', action: '@action' },
        {
            update: {
                method: 'POST',
                isArray: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }
    );
});
