module app.services {
	interface ICalculatorService {
		calculate(IDiskette, number, ISizeUnit): app.domain.IAnswer;
	}

	class CalculatorService implements ICalculatorService {
		calculate(disk: app.domain.IDiskette, quantity: number, unit: app.domain.ISizeUnit): app.domain.IAnswer {
			var bytesInMb = Math.pow(1024, 2);
			var gramsInKg = 1000;
			var milimetersInKm = 1000 * 1000;

			var totalBytes = quantity * unit.bytes;
			var floppyCount = totalBytes / (disk.capacity * bytesInMb);
			var weightInKg = floppyCount * disk.weight / gramsInKg;

			return new app.domain.Answer(totalBytes, floppyCount, weightInKg, floppyCount * disk.length / milimetersInKm);
		}
	}

	angular.module('howManyFloppiesApp')
		.service('calculatorService', [CalculatorService])
		.constant('conversions', { kgInLbs: 0.453592, kmInMiles: 1.60934 });
}