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

demo.controller('btnController', ['$scope',function btnController($scope){
  $scope.defaultValue = 'None';

  $scope.php = function() {
    $scope.defaultValue = 'PHP';
  }
  $scope.js = function() {
    $scope.defaultValue = 'JAVASCRIPT';
  }
  $scope.java = function() {
    $scope.defaultValue = 'JAVA';
  }
  $scope.cpp = function() {
    $scope.defaultValue = 'C++';
  }
  $scope.asp = function() {
    $scope.defaultValue = 'ASP.NET';
  }
}]);


//Router
demo.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/',{template: 'Welcome user.'})
  .when('/first',{template: 'Welcome user in first page.'})
  .when('/second',{template: 'Welcome user in second page.'})
  .otherwise({redirectTo: '/'});
}]);