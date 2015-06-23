'use strict';

angular.module('TestaProfileServices', ['ngResource'])

.service('ProfileService', function( $resource ) {

    this.profile = $resource('http://localhost:7070/api/v1/user/:email/find',

        { email: '@email', action: '@action' },
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

        });

})

.service('ProfileCreateService', function( $resource ) {

    this.profile = $resource('http://localhost:7070/api/v1/user/create', null,
        {
            save: {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        });

});
