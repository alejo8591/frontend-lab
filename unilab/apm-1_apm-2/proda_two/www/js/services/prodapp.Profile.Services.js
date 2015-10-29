'use strict';

angular.module('prodappProfileServices', ['ngResource'])

.service('access', function($resource){

    this.login = $resource(
        'http://127.0.0.1:7070/api/v1/user/login',
        null,
        {
            signin: {
                method: 'POST'
            }
        }
    );
});
