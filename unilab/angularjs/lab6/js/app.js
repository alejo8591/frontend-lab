/**
 * Created by alejo8591 on 22/04/15.
 */
angular.module('StudentApp', ['ngRoute', 'StudentApp.Controller'])
.config([ '$routeProvider', function($routeProvider){
    /*
     * `when()` cuantas veces sea necesario
     * `otherwise()` una sola vez "OJO"
    */
    $routeProvider
    .when('/home', {
        templateUrl : "js/views/home.html"
    })
    .when('/students', {
        templateUrl : "js/views/form.html",
        controller: 'StudentController'
    })
    .otherwise({
        redirectTo: '/',
        templateUrl: 'js/views/home.html'
    });

}]);