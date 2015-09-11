/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../services/data.ts" />
'use strict';
angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', 'dataFactory', homeCtrl]);
function homeCtrl($state, dataFactory) {
    return new HomeCtrl($state, dataFactory);
}
var HomeCtrl = (function () {
    function HomeCtrl($state, dataFactory) {
        this.$state = $state;
        this.dataFactory = dataFactory;
        this.title = 'How Many Floppies?';
        this.units = dataFactory.getUnits();
        this.disks = dataFactory.getDisks();
        this.selectedUnit = this.units[0].id;
        this.selectedDisk = this.disks[0].id;
        this.quantity = 128;
    }
    HomeCtrl.prototype.calculate = function () {
        this.$state.go('results', { quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk });
    };
    return HomeCtrl;
})();
