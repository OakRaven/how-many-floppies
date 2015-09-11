/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="data.ts" />

'use strict';

angular.module('howManyFloppiesApp')
	.factory('calculatorFactory', [calculatorFactory]);

interface Answer {
	bytes: number;
	floppyCount: number;
	weight: number;
	distance: number;
}

function calculatorFactory(): CalculatorFactory {
	return new CalculatorFactory();
}

class CalculatorFactory {
	public calculate(disk: Diskette, quantity: number, unit: SizeUnit): Answer {
		var bytesInMb = Math.pow(1024, 2);
		var gramsInKg = 1000;
		var milimetersInKm = 1000 * 1000;

		var totalBytes = quantity * unit.bytes;
		var floppyCount = totalBytes / (disk.capacity * bytesInMb);
		var weightInKg = floppyCount * disk.weight / gramsInKg;

		return {
			bytes: totalBytes,
			floppyCount: floppyCount,
			weight: weightInKg,
			distance: floppyCount * disk.length / milimetersInKm
		};
	}
}