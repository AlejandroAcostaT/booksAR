// app.js
var app = angular.module('booksAR', [
	'ui.router',
	'ui.bootstrap',
	'ngFileUpload'
	]); //modules

//Global Controller
app.controller('GlobalCtrl', function($scope) {
    // Event listener for state change.
    $scope.$on('$stateChangeStart', function(event, toState, toParams) {
        $scope.bodyClass = toState.name + '-page';
        //Change this when user login services are ready
        $scope.state = toState.name;
    });

});


//Setting API Address
app.service('API', function(){
    return {
        bookAddress: 'http://192.168.1.13:3000/books/',
        address : 'http://192.168.1.13:3000/api/'
    };
});