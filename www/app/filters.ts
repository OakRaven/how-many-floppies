module app.filters {
	export function itemFilter() {
		return (input, floppyWeight) => {
			var output = [];
			angular.forEach(input, function(item) {
				if (floppyWeight / item.weight >= 1.0) {
					output.push(item);
				}
			});

			return output;
		};
	}

	export function itemPluralizeFilter() {
		return (item, floppyWeight) => {
			if (Math.round(floppyWeight / item.weight) === 1) {
				return item.name;
			}
			return item.name + 's';
		};
	}

	export function massUnitConversion($filter, conversions) {
		return (amount, isMetric) => {
			if (isMetric) {
				return $filter('number')(amount, 0) + ' kilograms';
			} else {
				return $filter('number')(amount / conversions.kgInLbs, 0) + ' pounds';
			}
		}
	}

	export function distanceUnitConversion($filter, conversions) {
		return (amount, isMetric) => {
			if (isMetric) {
				return $filter('number')(amount, 0) + ' kilometers';
			} else {
				return $filter('number')(amount / conversions.kmInMiles, 0) + ' miles';
			}
		}
	}

	angular.module('howManyFloppiesApp')
		.filter('itemFilter', itemFilter)
		.filter('itemPluralizeFilter', itemPluralizeFilter)
		.filter('massUnitConversion', ['$filter', 'conversions', massUnitConversion])
		.filter('distanceUnitConversion', ['$filter', 'conversions', distanceUnitConversion]);
}