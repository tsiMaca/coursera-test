    (function (){
        'use strict';
        angular.module('myFirstApp', [])
        .controller("MyFirstController", function ($scope){
            $scope.name =''
            $scope.totalValue = 0
            $scope.displayNumeric = function () {
                var totaNameValue = calculateNumericForString($scope.name);
                $scope.totalValue = totaNameValue;
            };
            function calculateNumericForString(string) {
                var totalStringValue = 0;
                for (var i = 0; i<string.length; i++) {
                    totalStringValue += string.charCodeAt(i);
                }
                return totalStringValue;
            }
            console.log($scope.totalValue)
        })
        
    })()