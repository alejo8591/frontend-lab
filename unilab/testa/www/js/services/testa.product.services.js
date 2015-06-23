'use strict';

angular.module('TestaProductServices', ['ngResource'])

.service('ProductListService', function( $resource ) {

        this.products = $resource('http://localhost:7070/api/v1/product/list');

})

.service('ProductOptionsService', function($resource){

    this.product = $resource('http://localhost:7070/api/v1/product/:id/:action',
        { id: '@id', action: '@action' },
        {
            update: {
                method: 'POST',
                isArray: false,
                headers: {
                        'Content-Type': 'application/json'
                }
            },

            delete: {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

        }
    );
})
