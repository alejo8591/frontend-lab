'use strict';

angular.module('TestaProfileControllers', ['TestaProfileServices'])

.controller('profile', function($scope, ProfileService) {

})

.controller('options', function($scope, $state) {


    $scope.loadLogin = function() {

        $state.go('app.login');

    };

    $scope.loadRegister = function() {

        $state.go('app.register');

    };

})

.controller('register', function($scope) {


})

.controller('login', function($scope) {

});
