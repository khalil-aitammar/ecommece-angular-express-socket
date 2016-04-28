var myApp = angular.module('myApp');

myApp.controller('filmsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('FilmsController loaded...');

    $scope.getFilms = function(){
        $http.get('/api/books').success(function(response){
            $scope.Films = response;
        });
    }

    $scope.getFilm = function(){
        var id = $routeParams.id;
        $http.get('/api/books/'+id).success(function(response){
            $scope.Film = response;
        });
    }

    $scope.addFilm = function(){
        console.log($scope.Film);
        $http.post('/api/Films/', $scope.Film).success(function(response){
            window.location.href='#/Films';
        });
    }


}]);