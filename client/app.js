var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'drugsController',
		templateUrl: 'views/drugs.html'
	})
	.when('/drugs', {
		controller:'drugsController',
		templateUrl: 'views/drugs.html'
	})
	.when('/drugs/details/:id',{
		controller:'drugsController',
		templateUrl: 'views/drug_details.html'
	})
	.when('/drugs/add',{
		controller:'drugsController',
		templateUrl: 'views/add_drug.html'
	})
	.when('/drugs/edit/:id',{
		controller:'drugsController',
		templateUrl: 'views/edit_drug.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
