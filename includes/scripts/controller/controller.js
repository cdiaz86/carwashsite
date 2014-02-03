var mycarApp = angular.module('mycarApp', ['ngRoute']);

mycarApp.config(function ($routeProvider) {
  $routeProvider
    .when('/page/home', {templateUrl: 'views/main.html', controller: 'MainController'})           
    .when('/page/service/', {templateUrl: 'views/servicios.html', controller: 'ServiceController'})   
    .when('/page/service/:id', {templateUrl: 'views/servicios.html', controller: 'ServiceController'})   
    .otherwise({redirectTo: '/page/home'});
});

mycarApp.controller('MainController',['$scope',function($scope) {

    

}]);


mycarApp.controller('ServiceController',['$scope','$routeParams', function($scope,$routeParams) {
 
    var wash_options = [{id:"1",name:"Lavado VIP(SONAX)",content:"Es ele contenido de lavado VIP"},                        
                        {id:"2",name:"Lavado de Salon",content:"Es ele contenido de lavado Salon"},
                        {id:"3",name:"Lavado de Motor a Vapor",content:"Es ele contenido de de Motor a Vapor"},
                        {id:"4",name:"Lavado Otros",content:"Es ele contenido de de otro"}
                        ];
    $scope.washoptions = wash_options;     
   // $scope.content = $routeParams.id;
    
                        
                
}]);  

