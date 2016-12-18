var myApp = angular.module('myApp');

myApp.controller('drugsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('drugsController loaded...');

	$scope.getdrugs = function(){
		$http.get('/api/drugs').success(function(response){
			$scope.drugs = response;
		});
	}

	$scope.getdrug = function(){
		var id = $routeParams.id;
		$http.get('/api/drugs/'+id).success(function(response){
			$scope.drug = response;
		});
	}

	$scope.adddrug = function(){
		console.log($scope.drug);
		$http.post('/api/drugs/', $scope.drug).success(function(response){
			window.location.href='#/drugs';
		});
	}

	$scope.updatedrug = function(){
		var id = $routeParams.id;
		$http.put('/api/drugs/'+id, $scope.drug).success(function(response){
			window.location.href='#/drugs';
		});
	}

	$scope.removedrug = function(id){
		$http.delete('/api/drugs/'+id).success(function(response){
			window.location.href='#/drugs';
		});
	}
}]);
