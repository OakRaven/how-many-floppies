'use strict';

angular.module('howManyFloppiesApp')
	.controller('HomeCtrl', function($state){
		var self = this;
		
		self.title = 'How Many Floppies?';
		self.units = 'GB';
		self.quantity = 0;
		
		self.calculate = function(){
			$state.go('#/results');
		};
	});