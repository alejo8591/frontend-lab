'use strict';

/**
 * @ngdoc function
 * @name lab11App.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the lab11App
 */
angular.module('lab11')
.controller('MembersCtrl', function ($scope, $http) {
  $http.get('http://localhost:9000/members.json')
  .success(function(data){
    $scope.members = data;
  })
  .error(function(error){
    console.log(error);
  });

  $scope.gridOptions = {
    data: 'members',
    columnDefs: [
      {field:'id', displayName:'Nº. Identificación'},
      {field:'name', displayName:'Nombre'},
      {field:'fidelity', displayName:'Puntos Fidelidad'},
      {field:'registrationDate', displayName:'Fecha de Registro'},
      {field:'memberType', displayName:'Tipo de Miembro'}
    ]
  };
});
