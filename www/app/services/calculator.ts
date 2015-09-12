'use strict';

module services {
	interface ICalculatorService {
		calculate(IDiskette, number, ISizeUnit): models.IAnswer;
	}

	export class CalculatorService implements ICalculatorService {
		calculate(disk: models.IDiskette, quantity: number, unit: models.ISizeUnit): models.IAnswer {
			var bytesInMb = Math.pow(1024, 2);
			var gramsInKg = 1000;
			var milimetersInKm = 1000 * 1000;

			var totalBytes = quantity * unit.bytes;
			var floppyCount = totalBytes / (disk.capacity * bytesInMb);
			var weightInKg = floppyCount * disk.weight / gramsInKg;

			return new models.Answer(totalBytes, floppyCount, weightInKg, floppyCount * disk.length / milimetersInKm);
		}
	}
}

angular.module('howManyFloppiesApp')
	.service('calculatorService', [services.CalculatorService])
	.constant('conversions', {kgInLbs: 0.453592, kmInMiles: 1.60934});