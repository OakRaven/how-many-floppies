'use strict';
var kgInLbs = 0.453592;
var kmInMiles = 1.60934;
var ResultsCtrl = (function () {
    function ResultsCtrl($scope, $stateParams, $filter, dataFactory, calculatorService) {
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
            this.weight = result.weight / kgInLbs;
            this.distance = result.distance / kmInMiles;
            this.weightUnit = 'pounds';
            this.distanceUnit = 'miles';
        }
        else {
            this.weight = result.weight;
            this.distance = result.distance;
            this.weightUnit = 'kilograms';
            this.distanceUnit = 'kilometers';
        }
        this.result = result;
    }
    return ResultsCtrl;
})();
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
function massUnitConversion($filter) {
    return function (amount, isMetric) {
        if (isMetric) {
            return $filter('number')(amount, 0) + ' kilograms';
        }
        else {
            return $filter('number')(amount / kgInLbs, 0) + ' pounds';
        }
    };
}
function distanceUnitConversion($filter) {
    return function (amount, isMetric) {
        if (isMetric) {
            return $filter('number')(amount, 0) + ' kilometers';
        }
        else {
            return $filter('number')(amount / kmInMiles, 0) + ' miles';
        }
    };
}
angular.module('howManyFloppiesApp')
    .filter('itemFilter', itemFilter)
    .filter('itemPluralizeFilter', itemPluralizeFilter)
    .filter('massUnitConversion', ['$filter', massUnitConversion])
    .filter('distanceUnitConversion', ['$filter', distanceUnitConversion])
    .controller('ResultsCtrl', ['$scope', '$stateParams', '$filter', 'dataService', 'calculatorService', ResultsCtrl]);
