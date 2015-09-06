(function () {
	'use strict';

	angular.module('howManyFloppiesApp')
		.filter('itemFilter', itemFilter)
		.filter('itemPluralizeFilter', itemPluralizeFilter)
		.controller('ResultsCtrl', ['$scope', '$stateParams', '$filter', 'dataFactory', 'calculatorFactory', ResultsCtrl]);

	function itemFilter() {
		return function (input, floppyWeight) {
			var output = [];
			angular.forEach(input, function (item) {
				if (floppyWeight / item.weight >= 1.0) {
					output.push(item);
				}
			});

			return output;
		};
	}

	function itemPluralizeFilter() {
		return function (item, floppyWeight) {
			if (Math.round(floppyWeight / item.weight) === 1) {
				return item.name;
			}
			return item.name + 's';
		};
	}

	function ResultsCtrl($scope, $stateParams, $filter, dataFactory, calculatorFactory) {
		var self = this;
		var kgInLbs = 0.453592;
		var kmInMiles = 1.60934;

		self.quantity = $stateParams.quantity;
		self.weightUnit = 'kilograms';
		self.distanceUnit = 'kilometers';

		self.selectedDisk = $filter('filter')(dataFactory.getDisks(), { id: $stateParams.disk })[0];
		self.selectedUnit = $filter('filter')(dataFactory.getUnits(), { id: $stateParams.unit })[0];

		self.isMetric = true;

		var calculate = function () {
			var result = calculatorFactory.calculate(self.selectedDisk, self.quantity, self.selectedUnit);

			self.items = $filter('itemFilter')(dataFactory.getItems(), result.weight);

			self.slide = Math.floor(Math.random() * self.items.length);
			self.item = self.items[self.slide];

			if (!self.isMetric) {
				self.weight = result.weight / kgInLbs;
				self.distance = result.distance / kmInMiles;
				self.weightUnit = 'pounds';
				self.distanceUnit = 'miles';
			} else {
				self.weight = result.weight;
				self.distance = result.distance;
				self.weightUnit = 'kilograms';
				self.distanceUnit = 'kilometers';
			}

			self.result = result;
		};

		calculate();

		$scope.$watch(function () { return self.isMetric; }, function () { calculate(); });
	};
})();