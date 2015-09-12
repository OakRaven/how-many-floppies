var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var HomeCtrl = (function () {
            function HomeCtrl($state, dataService) {
                this.$state = $state;
                this.dataService = dataService;
                this.title = 'How Many Floppies?';
                this.units = dataService.getUnits();
                this.disks = dataService.getDisks();
                this.selectedUnit = this.units[0].id;
                this.selectedDisk = this.disks[0].id;
                this.quantity = 128;
            }
            HomeCtrl.prototype.calculate = function () {
                this.$state.go('results', { quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk });
            };
            return HomeCtrl;
        })();
        controllers.HomeCtrl = HomeCtrl;
        angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', 'dataService', HomeCtrl]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
