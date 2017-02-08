var app = angular.module('pressione',['ngRoute']);

app.conf = function($routeProvider){
   $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/pressione',{
            controller: 'PressioneController',
            templateUrl: 'views/pressione.html'
        })
        .when('/temperatura',{
            controller: 'TemperaturaController',
            templateUrl: 'views/temperatura.html'
        })
        .otherwise({ 
         redirectTo: '/' 
        }); 
};

app.config(app.conf);

app.constant ("URL",{
    "REST":"http://localhost/pa"
});