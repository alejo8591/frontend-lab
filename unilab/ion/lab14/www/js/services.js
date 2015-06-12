angular.module('lab13.Services', [
    'ngResource'
])

.service('users', function() {

    this.data = {};

    this.data.first_name = '';

    this.data.last_name = '';

    this.data.email = '';

})

.service('lists', function($resource){

        this.user_list = $resource('http://127.0.0.1:7070/api/v1/user/list');
});