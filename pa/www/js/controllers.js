angular.module('app.controllers', ['app.services'])

.controller('homeCtrl', function($scope, Product) {

  Product.list.query(function(_data){

    $scope.list = _data;
    console.log(_data);
  });
})

.controller('optionsCtrl', function($scope) {

})

.controller('signInCtrl', function($scope) {

})

.controller('signUpCtrl', function($scope) {

})

.controller('productDetailCtrl', function($scope, $stateParams, Product) {
  console.log($stateParams.id);

  $scope.data_product = {};

  Product.detail.get({id: $stateParams.id}, function(_data){
    console.log(_data);
    /*
    $scope.data_product.name = _data.name;
    $scope.data_product.type = _data.type;
    $scope.data_product.quantity = _data.quantity;
    $scope.data_product.price = _data.price;
    $scope.data_product.id = _data.id;
    */
    $scope.data_product = _data;
    localStorage.setItem('product_' + _data.id, JSON.stringify(_data));
  });

})

.controller('productEditCtrl', function($scope, $state, $stateParams, Product) {
   console.log(JSON.parse(localStorage.getItem('product_' + $stateParams.id)));

  $scope.data_product = {};

  var _data = JSON.parse(localStorage.getItem('product_' + $stateParams.id));

  $scope.data_product.name = _data.name;
  $scope.data_product.type = _data.type;
  $scope.data_product.quantity = _data.quantity;
  $scope.data_product.price = _data.price;
  $scope.data_product.id = _data.id;

  $scope.product_edit = function(_product){

    console.log(_product);

    Product.edit.update({id: $stateParams.id}, _product, function(_data){

      console.log(_data);

      $state.go('productDetail',{'id':$stateParams.uid});
    });

  };

})

.controller('productCreateCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('profileEditCtrl', function($scope) {

})

.controller('forgotPasswordCtrl', function($scope) {

})

.controller('signOutCtrl', function($scope) {

})
