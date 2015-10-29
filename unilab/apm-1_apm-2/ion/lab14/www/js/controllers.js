angular.module('lab13.Controllers',
    [
        'ionic',
        'lab13.Factories',
        'lab13.Services'
    ]
)

.controller('lab13.ListController', function($scope,  $state, users) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };
})

.controller('lab13.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;
})

.controller('lab13.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
        });

});

