var myApp = angular.module('myApp',['ngRoute']);


myApp.config(function($routeProvider){
    $routeProvider.when('/', {
            controller:'filmController',
            templateUrl: 'views/films.html'
        })
        .when('/films', {
            controller:'filmController',
            templateUrl: 'views/films.html'
        })
        .when('/films/details/:id',{
            controller:'filmController',
            templateUrl: 'views/film_details.html'
        })
        .when('/films/add',{
            controller:'filmController',
            templateUrl: 'views/add_film.html'
        })
        .when('/films/edit/:id',{
            controller:'BooksController',
            templateUrl: 'views/edit_film.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});