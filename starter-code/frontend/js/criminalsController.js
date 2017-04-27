angular.module('CriminalsApp', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
	var self = this;
	self.all = [];
	self.editForm = false;


	//GET all
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


	this.addCriminal = addCriminal;
	this.newCriminal = {};


	//POST
	function addCriminal() {
		this.all.push(this.newCriminal);
		$http
		.post('http://localhost:3000/criminals', this.newCriminal)
		.then(function(response) {
			console.log(response);
		});
		self.newCriminal = {};
	}

	// function showCriminal() {
	// 	$http
	// 	.get('http://localhost:3000/criminals/:id')
	// 	.then(function(response) {
	// 		self.all = response.data;
	// 		console.log(self.all);
	// 	});
	// }

	this.deleteCriminal = deleteCriminal;

	//DELETE
	function deleteCriminal(criminal) {
		console.log("delete button clicked");

		  $http
		  .delete('http://localhost:3000/criminals/' + criminal._id)
		  .then(function(response){
		  	console.log(response);
		  	//var index = self.all.index;
		  	var index = self.all.indexOf(criminal);
		  	self.all.splice(index, 1);
		  	//self.$emit("criminal deleted", criminal);
		  });
		
	}

	this.editCriminal = editCriminal;
	var putCriminal = {};
	// self.editCriminal = function () {
		
	// };

	//PUT (doesn't work)
	function editCriminal(criminal) {
		self.editForm = !self.editForm;

		self.putCriminal = ({
			name: self.name,
			location: self.location,
			status: self.status
		});

		$http
		.put('http://localhost:3000/criminals/' + criminal._id)
		.then(function(response){

			var index = self.all.indexOf(criminal);
			//self.criminal.name = putCriminal.name;
			criminal.name = putCriminal.name; 

			console.log(index);	
			console.log(criminal.name);
			console.log(criminal.location);
			console.log(criminal.status);
		});
	}




}


