var myApp = angular.module('myApp');

myApp.controller('filmController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http){
    console.log('BooksController loaded...');

    $scope.getFilms = function(){
      
        $http.get('/api/films').success(function(response){
            $scope.films = response;
       console.log(response);
        });
    }


}]);

app.use(express.static(__dirname+'/client'));