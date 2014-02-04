var mycarApp = angular.module('mycarApp', ['ngRoute']);

mycarApp.filter('searchArray',function(){
   
   return function(array,id){
       
       for(var i=0;i<array.length;i++){

          if(id===array[i].id){
            return  array[i];            
          }            
       }
        return array[0];
   }    
   
});

mycarApp.config(function ($routeProvider) {
  $routeProvider
    .when('/page/home', {templateUrl: 'views/main.html', controller: 'MainController'})           
    .when('/page/service/', {templateUrl: 'views/servicios.html', controller: 'ServiceController'})   
    .when('/page/service/:id', {templateUrl: 'views/servicios.html', controller: 'ServiceController'})  
    .when('/page/contact/', {templateUrl: 'views/contact.html', controller: 'contactController'})       
    .otherwise({redirectTo: '/page/home'});
});

mycarApp.controller('MainController',['$scope',function($scope) {

    $scope.$emit('pageSelected',{page:"home"});

}]);

mycarApp.controller('wrapperController',['$scope',function($scope) {

    $scope.nav = [{name:"Acerca de Nosotros",icon:"glyphicon glyphicon-home",link:"#/page/home",text:"home"},
                    {name:"Servicios",icon:"",link:"#/page/service",text:"service"},
                    {name:"Contactenos",icon:"",link :"#/page/contact",text:"contact"}
                    
        ];
    
    $scope.$on('pageSelected',function(event,args){   
        
       $scope.activeMenu = function (pageActive) {
            var currentPage = args.page || '/page/home';  
            var pageSelected =  pageActive.text;
        
            return angular.lowercase(pageSelected) === currentPage ? true : false;
       }; 
    });    
}]);

mycarApp.controller('ServiceController',['$scope','$routeParams','$filter', function($scope,$routeParams,$filter) {
    
    $scope.$emit('pageSelected',{page:"service"});
        
    $scope.wash_options = [{id:"1",name:"Lavado VIP(SONAX)",content:"Es ele contenido de lavado VIP"},                        
                        {id:"2",name:"Lavado de Salon",content:"Es ele contenido de lavado Salon"},
                        {id:"3",name:"Lavado de Motor a Vapor",content:"Es ele contenido de de Motor a Vapor"},
                        {id:"4",name:"Lavado Otros",content:"Es ele contenido de de otro"}
                        ];
    $scope.washoptions = $scope.wash_options;     
    info = $filter('searchArray')($scope.wash_options,$routeParams.id);
    $scope.content = info.content;
                 
}]);  

mycarApp.controller('contactController',['$scope','$routeParams','$filter', function($scope,$routeParams,$filter){
   $scope.$emit('pageSelected',{page:"contact"});     
        
}]);