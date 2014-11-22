var myNameSpace = angular.module('myApp', []);
myNameSpace.controller('MyController', function MyController($scope) {
     
     	$scope.author = {
     	'name' : 'Keith Lang',
     	'title' : 'Top Dog',
     	'company' : 'KLDesigns'
     	}  
 	});
