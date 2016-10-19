'use strict';
demo.controller('EditEventController', function($scope) {
    $scope.event={
        name:''
    }
    $scope.saveEvent=function(event,newForm) {
        if(newForm.$valid) {
            window.alert(event.name);
        }
    }
});