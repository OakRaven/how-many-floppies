var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var ResultsController = (function () {
            function ResultsController($scope, $rootScope, $stateParams, $filter, dataFactory, calculatorService, settingsService, conversions) {
                var _this = this;
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
                var randomItemIndex = Math.floor(Math.random() * this.items.length);
                this.item = this.items[randomItemIndex];
                if (!settingsService.isMetric()) {
                    this.weight = result.weight / conversions.kgInLbs;
                    this.distance = result.distance / conversions.kmInMiles;
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
                $rootScope.$on('units-changed', function () {
                    _this.isMetric = settingsService.isMetric();
                });
            }
            ResultsController.prototype.goBack = function () {
                window.history.back();
            };
            return ResultsController;
        })();
        angular.module('howManyFloppiesApp')
            .controller('ResultsController', ['$scope', '$rootScope', '$stateParams', '$filter', 'dataService', 'calculatorService', 'settingsService', 'conversions', ResultsController]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
