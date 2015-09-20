module app.controllers {
	interface IResultsController {
		title: string;
		items: any[];
		weight: number;
		weightUnit: string;
		distance: number;
		distanceUnit: string;
		quantity: number;
		selectedDisk: app.domain.IDiskette;
		selectedUnit: app.domain.ISizeUnit;
		slide: number;
		item: app.domain.IComparisonItem;
		result: app.domain.IAnswer;
		isMetric: boolean;
		goBack(): void;
	}

	class ResultsController implements IResultsController {
		title: string;
		items: any[];
		weight: number;
		weightUnit: string;
		distance: number;
		distanceUnit: string;
		quantity: number;
		selectedDisk: app.domain.IDiskette;
		selectedUnit: app.domain.ISizeUnit;
		slide: number;
		item: app.domain.IComparisonItem;
		result: app.domain.IAnswer;
		isMetric: boolean;

		constructor($scope, $rootScope, $stateParams, $filter, dataFactory, calculatorService, settingsService: app.services.ISettingsService, conversions) {
			this.title = "Your Results!";
			this.isMetric = settingsService.isMetric();

			this.quantity = $stateParams.quantity;

			this.items = [];
			this.weightUnit = 'kilograms';
			this.distanceUnit = 'kilometers';

			this.selectedDisk = $filter('filter')(dataFactory.getDisks(), { id: $stateParams.disk })[0];
			this.selectedUnit = $filter('filter')(dataFactory.getUnits(), { id: $stateParams.unit })[0];

			var result = calculatorService.calculate(this.selectedDisk, this.quantity, this.selectedUnit);

			this.items = $filter('itemFilter')(dataFactory.getItems(), result.weight);

			this.slide = Math.floor(Math.random() * this.items.length);
			this.item = this.items[this.slide];

			if (!settingsService.isMetric()) {
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

			$rootScope.$on('units-changed', () => {
				this.isMetric = settingsService.isMetric();
			});
		}

		goBack() {
			window.history.back();
		}
	}

	angular.module('howManyFloppiesApp')
		.controller('ResultsController', ['$scope', '$rootScope', '$stateParams', '$filter', 'dataService', 'calculatorService', 'settingsService', 'conversions', ResultsController]);
}
