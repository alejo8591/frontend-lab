'use strict';

angular.module('lab13.Factories', [] )

.factory('information', function() {

    var data = {};

    data.first_name = '';

    data.last_name = '';

    data.email = '';

    return data;
});
