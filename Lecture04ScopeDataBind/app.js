    (function (){
        'use strict';
        angular.module('myFirstApp', [])
        .controller("MyFirstController", function ($scope){
            $scope.name ='Macarena'
            console.log($scope)
            $scope.sayHello = function() {
                return "hello Coursera"
            }
        })
        
    })()