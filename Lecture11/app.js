(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);

    MsgController.$inject =['$scope'];

    function MsgController ($scope){
        $scope.name ="Maca";
        $scope.sayMessage = function () {
            return "Maca likes to eat healthy meals"
        }

    }
 
})()

