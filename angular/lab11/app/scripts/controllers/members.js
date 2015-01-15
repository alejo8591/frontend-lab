'use strict';

/**
 * @ngdoc function
 * @name lab11App.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the lab11App
 */
angular.module('lab11')
.controller('MembersCtrl', function ($scope, $http, $modal, $filter) {
  $http.get('http://localhost:9000/members.json')
  .success(function(data){
    $scope.members = data;
  })
  .error(function(error){
    console.log(error);
  });

  $scope.gridOptions = {
    data: 'members',
    showGroupPanel: true,
    enableCellSelection: true,
    enableRowSelection: false,
    enableCellEdit: true,
    columnDefs: [
      {field:'id', displayName:'Nº. Identificación'},
      {field:'name', displayName:'Nombre'},
      {field:'fidelity', displayName:'Puntos Fidelidad'},
      {field:'registrationDate', displayName:'Fecha de Registro'},
      {field:'memberType', displayName:'Tipo de Miembro'}
    ]
  };

  $scope.showModal = function(){
    $scope.newMember = {};

    var modalInstance = $modal.open({
      templateUrl: 'views/add-members.html',
      controller: 'AddnewMemberCtrl',
        resolve: {
          newMember: function(){
            return $scope.newMember;
          }
        }
    });

    modalInstance.result.then(function(){
      $scope.members.push({
        id: $scope.members.length + 1,
        name: $scope.newMember.name,
        registrationDate: $filter('date')($scope.newMember.registrationDate, 'dd/MM/yy', 'UTC-5'),
        fidelity: $scope.newMember.fidelity,
        memberType: $scope.newMember.memberType
      });
    });
  };
})
.controller('AddnewMemberCtrl', function($scope, $modalInstance, newMember){
  $scope.newMember = newMember;

  $scope.saveNewMember = function(){
    $modalInstance.close(newMember);
  };

  $scope.cancel = function(){
    $modalInstance.dismiss('cancel');
  };
});
