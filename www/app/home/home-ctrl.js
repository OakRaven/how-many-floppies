var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController($state, dataService) {
                this.$state = $state;
                this.dataService = dataService;
                this.title = 'How Many Floppies?';
                this.units = dataService.getUnits();
                this.disks = dataService.getDisks();
                this.selectedUnit = this.units[0].id;
                this.selectedDisk = this.disks[0].id;
                this.quantity = 128;
            }
            HomeController.prototype.calculate = function () {
                this.$state.go('results', { quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk });
            };
            return HomeController;
        })();
        controllers.HomeController = HomeController;
        angular.module('howManyFloppiesApp').controller('HomeController', ['$state', 'dataService', HomeController]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
