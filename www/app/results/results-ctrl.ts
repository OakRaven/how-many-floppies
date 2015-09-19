module app.controllers {
	interface IResultsController {
		items: any[];
		weight: number;
		weightUnit: string;
		distance: number;
		distanceUnit: string;
		selectedDisk: app.domain.IDiskette;
		selectedUnit: app.domain.ISizeUnit;
		isMetric: boolean;
		slide: number;
		item: app.domain.IComparisonItem;
		result: app.domain.IAnswer;
	}

	export class ResultsController implements IResultsController {
		items: any[];
		weight: number;
		weightUnit: string;
		distance: number;
		distanceUnit: string;
		selectedDisk: app.domain.IDiskette;
		selectedUnit: app.domain.ISizeUnit;
		isMetric: boolean;
		slide: number;
		item: app.domain.IComparisonItem;
		result: app.domain.IAnswer;

		constructor($scope, $stateParams, $filter, dataFactory, calculatorService, conversions) {
			var quantity = $stateParams.quantity;

			this.items = [];
			this.weightUnit = 'kilograms';
			this.distanceUnit = 'kilometers';

			this.selectedDisk = $filter('filter')(dataFactory.getDisks(), { id: $stateParams.disk })[0];
			this.selectedUnit = $filter('filter')(dataFactory.getUnits(), { id: $stateParams.unit })[0];

			this.isMetric = true;

			var result = calculatorService.calculate(this.selectedDisk, quantity, this.selectedUnit);

			this.items = $filter('itemFilter')(dataFactory.getItems(), result.weight);

			this.slide = Math.floor(Math.random() * this.items.length);
			this.item = this.items[this.slide];

			if (!this.isMetric) {
				this.weight = result.weight / conversions.kgInLbs;
				this.distance = result.distance / conversions.kmInMiles;
				this.weightUnit = 'pounds';
				this.distanceUnit = 'miles';
			} else {
				this.weight = result.weight;
				this.distance = result.distance;
				this.weightUnit = 'kilograms';
				this.distanceUnit = 'kilometers';
			}

			this.result = result;
		}
	}
	
	angular.module('howManyFloppiesApp')
	.controller('ResultsController', ['$scope', '$stateParams', '$filter', 'dataService', 'calculatorService', 'conversions', ResultsController]);
}
