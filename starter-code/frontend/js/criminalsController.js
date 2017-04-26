angular.module('CriminalsApp', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
	var self = this;
	self.all = [];


	function getCriminals() {
		//console.log("get criminal is working");
		$http
		.get('http://localhost:3000/criminals')
		.then(function(response) {
			self.all = response.data;
			console.log(self.all);
		});
	}

	getCriminals();







}