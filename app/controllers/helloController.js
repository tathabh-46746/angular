'use strict';

demo.controller('helloController', function helloController($scope, eventData) {
	$scope.message = "Hello Angular";
	$scope.sortorder = 'name';
	$scope.myClass = 'blue';
	$scope.buttonDisable = true;
	$scope.show = true;

	$scope.event = eventData.getEvent(function(event){
		$scope.event=event;
	});
	
	$scope.upCount = function(session) {
		session.rating++;
	};	
	$scope.dnCount = function(session) {
		session.rating--;
	};

	$scope.showFun = function() {
		$scope.show = true;
	}
	$scope.hideFun = function() {
		$scope.show = false;
	}
});