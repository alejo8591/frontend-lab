angular.module('app.controllers', ['ui.router', 'app.services'])

.controller('SidebarCtrl', function ($scope, $state) {

    $scope.content = ['page-one', 'page-two', 'page-three'];

    $scope.setPage = function (page) {
        $state.transitionTo(page);
    };
})

.controller('PageThreeCtrl', function ($scope, Products) {

    Products.item_list.query(function(data){

        $scope.list = data;

        console.log($scope.list);
    });

})

.controller('PageTwoCtrl', function ($scope, Products) {

    var data = {
        "name": "Galaxy Tab",
        "type": "smartphone",
        "quantity": 10,
        "price": 1200000
    };

    Products.item_create.save(data, function(data){

        $scope.data = data;

        console.log($scope.data);
    });

});