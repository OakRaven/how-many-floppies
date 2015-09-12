var app;
(function (app) {
    var filters;
    (function (filters) {
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
        filters.itemFilter = itemFilter;
        function itemPluralizeFilter() {
            return function (item, floppyWeight) {
                if (Math.round(floppyWeight / item.weight) === 1) {
                    return item.name;
                }
                return item.name + 's';
            };
        }
        filters.itemPluralizeFilter = itemPluralizeFilter;
        function massUnitConversion($filter, conversions) {
            return function (amount, isMetric) {
                if (isMetric) {
                    return $filter('number')(amount, 0) + ' kilograms';
                }
                else {
                    return $filter('number')(amount / conversions.kgInLbs, 0) + ' pounds';
                }
            };
        }
        filters.massUnitConversion = massUnitConversion;
        function distanceUnitConversion($filter, conversions) {
            return function (amount, isMetric) {
                if (isMetric) {
                    return $filter('number')(amount, 0) + ' kilometers';
                }
                else {
                    return $filter('number')(amount / conversions.kmInMiles, 0) + ' miles';
                }
            };
        }
        filters.distanceUnitConversion = distanceUnitConversion;
        angular.module('howManyFloppiesApp')
            .filter('itemFilter', itemFilter)
            .filter('itemPluralizeFilter', itemPluralizeFilter)
            .filter('massUnitConversion', ['$filter', 'conversions', massUnitConversion])
            .filter('distanceUnitConversion', ['$filter', 'conversions', distanceUnitConversion]);
    })(filters = app.filters || (app.filters = {}));
})(app || (app = {}));
