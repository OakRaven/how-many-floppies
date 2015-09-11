'use strict';

interface IAnswer {
	bytes: number;
	floppyCount: number;
	weight: number;
	distance: number;
}

class Answer implements IAnswer {
	constructor(public bytes: number, public floppyCount: number,
		public weight: number, public distance: number) { }
}

interface ICalculatorService {
	calculate(IDiskette, number, ISizeUnit): IAnswer;
}

class CalculatorService implements ICalculatorService {
	calculate(disk: IDiskette, quantity: number, unit: ISizeUnit): IAnswer {
		var bytesInMb = Math.pow(1024, 2);
		var gramsInKg = 1000;
		var milimetersInKm = 1000 * 1000;

		var totalBytes = quantity * unit.bytes;
		var floppyCount = totalBytes / (disk.capacity * bytesInMb);
		var weightInKg = floppyCount * disk.weight / gramsInKg;

		return new Answer(totalBytes, floppyCount, weightInKg, floppyCount * disk.length / milimetersInKm);
	}
}

angular.module('howManyFloppiesApp')
	.service('calculatorService', [CalculatorService]);