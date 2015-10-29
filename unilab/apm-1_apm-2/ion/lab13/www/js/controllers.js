angular.module('lab13.Controllers', ['lab13.Factories'] )

.controller('lab13.ListController', function($scope,  information) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = information;
})

.controller('lab13.ViewController', function($scope, information) {

    $scope.data_information = information;
});