(function () {
	'use strict';

	angular.module('howManyFloppiesApp').factory('dataFactory', [dataFactory]);
	
	function dataFactory(){
		var self = this;
		
		self.getItems = function(){
			return [
				{name: 'Midsize Car', weight: 1000, image: ''},
				{name: 'African Elephant', weight: 2000, image: ''},
				{name: 'Professional Wrestlers', weight: 200, image: ''}
			];
		}
		
		return {
			getItems: self.getItems	
		};
	}
})();