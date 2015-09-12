module filters {
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

	export function massUnitConversion($filter) {
		return (amount, isMetric) => {
			if (isMetric) {
				return $filter('number')(amount, 0) + ' kilograms';
			} else {
				return $filter('number')(amount / kgInLbs, 0) + ' pounds';
			}
		}
	}

	export function distanceUnitConversion($filter) {
		return (amount, isMetric) => {
			if (isMetric) {
				return $filter('number')(amount, 0) + ' kilometers';
			} else {
				return $filter('number')(amount / kmInMiles, 0) + ' miles';
			}
		}
	}
}

angular.module('howManyFloppiesApp')
	.filter('itemFilter', filters.itemFilter)
	.filter('itemPluralizeFilter', filters.itemPluralizeFilter)
	.filter('massUnitConversion', ['$filter', filters.massUnitConversion])
	.filter('distanceUnitConversion', ['$filter', filters.distanceUnitConversion]);