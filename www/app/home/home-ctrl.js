/* globals angular */

(function () {
	'use strict';

	angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', 'dataFactory', HomeCtrl]);

	function HomeCtrl($state, dataFactory) {
		var self = this;

		self.title = 'How Many Floppies?';
		
		self.units = dataFactory.getUnits();
		self.selectedUnit = self.units[1];
		
		self.quantity = 128;
		
		self.disks = dataFactory.getDisks();
		self.selectedDisk = self.disks[0];

		self.calculate = function () {
			$state.go('results', {quantity: self.quantity, unit: self.selectedUnit.id, disk: self.selectedDisk.id});
		};
	}
})();