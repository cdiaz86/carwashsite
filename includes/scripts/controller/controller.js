var mycarApp = angular.module('mycarApp', ['ngRoute']);

mycarApp.config(function ($routeProvider) {
  $routeProvider
    .when('/page/home', {templateUrl: 'views/main.html', controller: 'MainController'})           
    .when('/page/service', {templateUrl: 'views/servicios.html', controller: 'RouteController'})   
    .otherwise({redirectTo: '/page/home'});
});

mycarApp.controller('MainController',['$scope',function($scope) {


}]);


mycarApp.controller('RouteController',['$scope', function($scope) {
 
}]);  

