'use strict';

angular.module('TestaProfileServices', ['ngResource'])

.service('ProfileService', function( $resource ) {

    this.profile = $resource('http://localhost:7070/api/v1/user/:id/find', { id: '@id' });

});
