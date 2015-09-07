/* globals angular */

(function () {
	'use strict';

	angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', 'dataFactory', HomeCtrl]);

	function HomeCtrl($state, dataFactory) {
		var self = this;

		self.title = 'How Many Floppies?';
		
		var units = dataFactory.getUnits();
		self.units = units;
		self.selectedUnit = units[0].id;
		
		self.quantity = 128;
		
		var disks = dataFactory.getDisks();
		self.disks = disks;
		self.selectedDisk = disks[0].id;
		
		self.calculate = function () {
			$state.go('results', {quantity: self.quantity, unit: self.selectedUnit, disk: self.selectedDisk});
		};
	}
})();