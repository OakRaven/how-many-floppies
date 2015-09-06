(function () {
	'use strict';

	angular.module('howManyFloppiesApp')
		.factory('calculatorFactory', ['dataFactory', calculatorFactory]);


	function calculatorFactory(dataFactory) {
		var self = this;

		self.calculate = function (disk, quantity, unit) {
			var bytesInMb = Math.pow(1024, 2);
			var gramsInKg = 1000;
			var milimetersInKm = 1000 * 1000;

			var totalBytes = quantity * unit.bytes;
			var floppyCount = totalBytes / (disk.capacity * bytesInMb);
			var weightInKg = floppyCount * disk.weight / gramsInKg;

			var answer = {
				bytes: totalBytes,
				floppyCount: floppyCount,
				weight: weightInKg,
				distance: floppyCount * disk.length / milimetersInKm
			};

			return answer;
		};

		return {
			calculate: self.calculate
		};
	}
})();