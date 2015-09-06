(function () {
	'use strict';

	angular.module('howManyFloppiesApp').factory('dataFactory', [dataFactory]);

	function dataFactory() {
		var self = this;

		self.getItems = function () {
			return [
				{ id: 1, name: 'mid size car', weight: 1461.021, image: 'car.png' },
				{ id: 2, name: 'African elephant', weight: 6985.3225, image: 'elephant.jpg' },
				{ id: 3, name: 'professional wrestler', weight: 113.398, image: 'wrestler.jpg' },
				{ id: 4, name: 'dairy cow', weight: 680.389, image: 'cow.png' },
				{ id: 5, name: 'flat screen television', weight: 22.6796, image: 'tv.jpg' },
				{ id: 6, name: 'dump truck', weight: 32000, image: 'dump-truck.jpg' },
				{ id: 7, name: 'killer whale', weight: 2468.903, image: 'orca.jpg' }
			];
		}

		self.getDisks = function () {		
			// floppy disk metrics from https://www.staff.ncl.ac.uk/roger.broughton/museum/floppys
			return [
				{ id: 1, label: '3.5" floppy', length: 93, weight: 19, capacity: 1.44 },
				{ id: 2, label: '5.25" floppy (low density)', length: 133, weight: 12, capacity: 0.37 },
				{ id: 3, label: '5.25" floppy (high density)', length: 133, weight: 12, capacity: 1.2 },
			];
		};

		self.getUnits = function () {
			return [
				{ id: 1, label: 'MB', bytes: Math.pow(1024, 2) },
				{ id: 2, label: 'GB', bytes: Math.pow(1024, 3) },
				{ id: 3, label: 'TB', bytes: Math.pow(1024, 4) }
			];
		};

		return {
			getItems: self.getItems,
			getDisks: self.getDisks,
			getUnits: self.getUnits
		};
	}
})();